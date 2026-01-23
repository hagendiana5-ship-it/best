
import React, { useState, useRef } from 'react';
import { editImageWithGemini, generateVideoWithVeo } from '../services/ai';

const prompts = [
  {
    title: "Hero-Bereich (Modern & Clean)",
    text: "Close-up of a high-quality designer workplace with a laptop showing a clean website, warm morning light, professional and inviting atmosphere, 4k, minimalist."
  },
  {
    title: "Service-Atmosphäre (Persönlich)",
    text: "Collaborative scene: A friendly woman explaining a digital concept to a craftsman in a workshop, blurred background, authentic, bright colors, focus on connection and technology."
  },
  {
    title: "Branding (Kreativ)",
    text: "Abstract creative visualization of digital transformation: glowing blue lines connecting a physical business card to a smartphone screen, professional lighting, depth of field."
  }
];

const AiTools: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [resultVideo, setResultVideo] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setResultImage(null);
        setResultVideo(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = async () => {
    if (!selectedImage || !prompt) return;
    setLoading(true);
    setLoadingStatus('KI bearbeitet dein Bild...');
    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      setResultImage(result);
      setResultVideo(null);
    } catch (error) {
      alert("Fehler bei der Bildbearbeitung.");
    } finally {
      setLoading(false);
      setLoadingStatus('');
    }
  };

  const handleGenerateVideo = async () => {
    if (!selectedImage) return;
    
    if (typeof (window as any).aistudio !== 'undefined') {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await (window as any).aistudio.openSelectKey();
        }
    }

    setLoading(true);
    setResultVideo(null);
    setResultImage(null);
    try {
      const videoUrl = await generateVideoWithVeo(selectedImage, prompt, aspectRatio, (status) => {
        setLoadingStatus(status);
      });
      setResultVideo(videoUrl);
    } catch (error: any) {
      if (error.message === "RESELECT_KEY") {
         await (window as any).aistudio.openSelectKey();
         alert("Bitte wähle einen gültigen API Key aus einem bezahlten Projekt aus.");
      } else {
         alert("Fehler bei der Video-Generierung.");
      }
    } finally {
      setLoading(false);
      setLoadingStatus('');
    }
  };

  return (
    <section id="ai-tools" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">Zukunft hautnah</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Dianas KI-Studio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nutze modernste KI-Technologie, um deine Bilder zu bearbeiten oder in Videos zu verwandeln. Exklusiv für meine Kunden zum Testen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-12">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1. Bild hochladen</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-400 transition-colors bg-white"
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="Vorschau" className="max-h-48 mx-auto rounded-lg mb-4 shadow-sm" />
                ) : (
                  <div className="py-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-1 text-sm text-gray-600">Klicken, um ein Foto auszuwählen</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">2. Was soll passieren? (Prompt)</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="z.B. 'Füge einen Retro-Filter hinzu' oder nutze die Vorschläge unten..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none h-24 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                disabled={!selectedImage || !prompt || loading}
                onClick={handleEditImage}
                className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all disabled:opacity-50 shadow-sm"
              >
                <span className="text-2xl mb-1">✨</span>
                <span className="font-bold text-gray-900">Bild bearbeiten</span>
                <span className="text-xs text-gray-500">Gemini 2.5 Flash</span>
              </button>
              <button 
                disabled={!selectedImage || loading}
                onClick={handleGenerateVideo}
                className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 transition-all disabled:opacity-50 shadow-sm"
              >
                <span className="text-2xl mb-1">🎬</span>
                <span className="font-bold text-gray-900">Video erstellen</span>
                <span className="text-xs text-gray-500">Veo 3.1 Preview</span>
              </button>
            </div>

            {loading && (
              <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-600 border-t-transparent"></div>
                <span className="text-indigo-700 font-medium">{loadingStatus}</span>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 min-h-[400px] flex flex-col shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Ergebnis-Vorschau
            </h3>
            <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative">
              {resultVideo ? (
                <video src={resultVideo} controls autoPlay loop className="max-w-full max-h-[500px]" />
              ) : resultImage ? (
                <img src={resultImage} alt="KI Ergebnis" className="max-w-full max-h-[500px] object-contain" />
              ) : (
                <div className="text-gray-400 text-center px-8">
                  <p className="font-medium">Hier erscheint dein Ergebnis.</p>
                  <p className="text-xs mt-2 italic">Nutze ein Bild und einen Prompt links.</p>
                </div>
              )}
            </div>
            {resultVideo && (
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Veo 3.1 Fast</span>
                <a href={resultVideo} download="video.mp4" className="text-indigo-600 font-bold hover:underline">Video herunterladen</a>
              </div>
            )}
          </div>
        </div>

        {/* Suggested Prompts */}
        <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>💡</span> Inspirations-Prompts für deine Webseite
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {prompts.map((p, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm flex flex-col">
                <p className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-wide">{p.title}</p>
                <p className="text-sm text-gray-600 mb-4 flex-grow italic">"{p.text}"</p>
                <button 
                  onClick={() => setPrompt(p.text)}
                  className="text-indigo-600 font-semibold text-sm flex items-center gap-1 hover:text-indigo-700 transition"
                >
                  Text übernehmen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTools;
