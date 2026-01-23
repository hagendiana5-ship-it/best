import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const editImageWithGemini = async (
  base64Image: string,
  prompt: string,
  mimeType: string = 'image/png'
): Promise<string | null> => {
  // Use named parameter and direct process.env.API_KEY without fallback
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image.split(',')[1],
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
};

export const generateVideoWithVeo = async (
  base64Image: string,
  prompt: string,
  aspectRatio: '16:9' | '9:16',
  onProgress: (status: string) => void
): Promise<string | null> => {
  // Creating a new GoogleGenAI instance right before the call ensures the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    onProgress("Initialisiere Video-Generierung...");
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Animate this image smoothly',
      image: {
        imageBytes: base64Image.split(',')[1],
        mimeType: 'image/png',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      onProgress("Video wird gerendert... Das kann einen Moment dauern.");
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) return null;

    // Fetch video with API key appended as per guidelines
    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await videoResponse.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    if (error?.message?.includes("Requested entity was not found")) {
        throw new Error("RESELECT_KEY");
    }
    console.error("Error generating video:", error);
    throw error;
  }
};