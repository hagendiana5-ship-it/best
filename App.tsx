
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import SorglosPaket from './components/SorglosPaket';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';
import WhatsAppButton from './components/WhatsAppButton';
import { useLanguage } from './contexts/LanguageContext';
import { Language } from './translations';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'legal'>('home');
  const { language, setLanguage } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Interactive background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Bubble system - softer and friendlier
    class Bubble {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 40 + 20; // Larger bubbles
        const colors = [
          'rgba(196, 181, 253, 0.4)', // soft lavender
          'rgba(165, 243, 252, 0.4)',  // soft sky blue
          'rgba(199, 210, 254, 0.4)',  // soft periwinkle
          'rgba(221, 214, 254, 0.4)',  // soft purple
          'rgba(186, 230, 253, 0.4)',  // soft light blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.15; // Softer opacity
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        // Gentle mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(150 / distance, 0.3);

        if (distance < 150) {
          this.vx -= dx * force * 0.008;
          this.vy -= dy * force * 0.008;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Boundary wrap
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;

        // Gentle damping
        this.vx *= 0.995;
        this.vy *= 0.995;
      }

      draw() {
        ctx.save();
        
        // Pulsing effect
        const pulse = Math.sin(Date.now() * this.pulseSpeed) * 5 + this.size;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, pulse * 1.5
        );
        gradient.addColorStop(0, this.color.replace('0.4', '0.2'));
        gradient.addColorStop(0.5, this.color.replace('0.4', '0.1'));
        gradient.addColorStop(1, this.color.replace('0.4', '0'));
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulse * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Main bubble
        const bubbleGradient = ctx.createRadialGradient(
          this.x - pulse * 0.3, this.y - pulse * 0.3, 0,
          this.x, this.y, pulse
        );
        bubbleGradient.addColorStop(0, this.color.replace('0.4', '0.6'));
        bubbleGradient.addColorStop(0.7, this.color);
        bubbleGradient.addColorStop(1, this.color.replace('0.4', '0.2'));
        
        ctx.fillStyle = bubbleGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight
        ctx.globalAlpha = this.opacity * 0.8;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x - pulse * 0.2, this.y - pulse * 0.2, pulse * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    const bubbles: Bubble[] = [];
    for (let i = 0; i < 50; i++) {
      bubbles.push(new Bubble());
    }

    let animationId: number;
    const animate = () => {
      // Lighter background with soft fade
      ctx.fillStyle = 'rgba(241, 245, 249, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Very subtle connections between nearby bubbles
      bubbles.forEach((b1, i) => {
        bubbles.slice(i + 1).forEach((b2) => {
          const dx = b1.x - b2.x;
          const dy = b1.y - b2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.save();
            ctx.strokeStyle = `rgba(196, 181, 253, ${0.1 * (1 - distance / 200)})`;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(b1.x, b1.y);
            ctx.lineTo(b2.x, b2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-800 selection:bg-purple-500/30 relative">
      <style dangerouslySetInnerHTML={{ __html: `
        /* HELLERER, FREUNDLICHERER HINTERGRUND */
        .animated-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 25%, #e0f2fe 50%, #f3e8ff 75%, #f8fafc 100%);
            background-size: 400% 400%;
            animation: gradient-shift 20s ease infinite;
            overflow: hidden;
        }
        
        @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .mesh-gradient {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(196, 181, 253, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(165, 243, 252, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(199, 210, 254, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 90% 20%, rgba(221, 214, 254, 0.22) 0%, transparent 50%);
            animation: mesh-rotate 30s linear infinite;
            filter: blur(100px);
        }

        @keyframes mesh-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .particle-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }
        
        /* Darker text overlay for better readability on lighter background */
        body {
            background-color: #f8fafc;
        }

        /* TEXT-EFFEKT - Lighter, friendlier colors */
        .grad-text {
            background: linear-gradient(90deg, #a78bfa, #60a5fa, #38bdf8, #a78bfa);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: text-flow 4s linear infinite;
        }
        @keyframes text-flow { 
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }

        /* Glassmorphism Adjustment */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Overlay für bessere Lesbarkeit */
        .content-overlay {
            position: relative;
            z-index: 1;
        }
        
        /* Subtiler Overlay für Textbereiche - behält hellen Hintergrund, aber macht Text lesbar */
        .text-overlay {
            position: relative;
        }
        
        .text-overlay::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, 
                rgba(15, 23, 42, 0.02) 0%,
                rgba(15, 23, 42, 0.01) 50%,
                rgba(15, 23, 42, 0.02) 100%);
            pointer-events: none;
            z-index: -1;
        }
      `}} />

      {/* Moderner interaktiver Hintergrund */}
      <div className="animated-background">
        <div className="mesh-gradient"></div>
      </div>
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Language Switcher */}
      <div className="fixed top-24 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-xl border border-purple-200/30 rounded-full p-1 shadow-lg">
        {(['de', 'en', 'es'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              language === lang
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar onHomeClick={() => setView('home')} />
      <main className="relative z-10 content-overlay">
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <AboutMe />
            <SorglosPaket />
            <Pricing />
            <Contact />
          </>
        ) : (
          <Legal />
        )}
      </main>
      <Footer onLegalClick={() => setView('legal')} onHomeClick={() => setView('home')} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
