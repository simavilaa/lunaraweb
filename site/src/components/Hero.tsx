"use client";

import { useEffect, useRef } from "react";
import Logo from "./Logo";

function GrainCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas chico escalado con CSS — muy performante
    canvas.width = 256;
    canvas.height = 256;

    let raf: number;
    let tick = 0;

    const draw = () => {
      tick++;
      if (tick % 3 === 0) {
        const img = ctx.createImageData(256, 256);
        for (let i = 0; i < img.data.length; i += 4) {
          const v = (Math.random() * 255) | 0;
          img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
          img.data[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.038,
        mixBlendMode: "screen",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-[#0F0E17] overflow-hidden"
      aria-label="Inicio"
    >
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(80px, -60px) scale(1.12); }
          66%       { transform: translate(-50px, 40px) scale(0.93); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-70px, 60px) scale(1.1); }
          70%       { transform: translate(55px, -35px) scale(0.9); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(50px, 70px) scale(1.15); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .h-logo { animation: fadeIn 0.9s cubic-bezier(.22,1,.36,1) both 0.1s; }
        .h-h1   { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both 0.35s; }
        .h-tag  { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both 0.55s; }
        .h-sub  { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both 0.72s; }
        .h-cta  { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both 0.88s; }
      `}</style>

      {/* Blob 1 — grande, centro-arriba */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          left: "25%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "blob1 15s ease-in-out infinite",
          willChange: "transform",
          zIndex: 1,
        }}
      />

      {/* Blob 2 — mediano, izquierda-abajo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "45%",
          left: "-8%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(91,33,182,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
          animation: "blob2 19s ease-in-out infinite",
          willChange: "transform",
          zIndex: 1,
        }}
      />

      {/* Blob 3 — chico, derecha-arriba */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-8%",
          right: "-3%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 60%)",
          filter: "blur(52px)",
          animation: "blob3 12s ease-in-out infinite",
          willChange: "transform",
          zIndex: 1,
        }}
      />

      {/* Grain animado con canvas real */}
      <GrainCanvas />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="h-logo flex flex-col items-center gap-4 mb-10">
          <Logo variant="color" size={72} />
          <h1 className="h-h1 font-serif text-white text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
            lunara
            <span className="text-[#7C3AED] font-sans font-bold text-3xl sm:text-4xl align-super ml-1">
              IT
            </span>
          </h1>
        </div>

        <p className="h-tag text-gray-300 text-xl sm:text-2xl md:text-3xl font-light leading-snug max-w-2xl mx-auto mb-4">
          Tecnología para personas y empresas.
        </p>
        <p className="h-sub text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-12">
          Desde reparar tu PC hasta montar la red de tu empresa.
          Un técnico real, en CABA y zona norte.
        </p>

        <div className="h-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-semibold text-base px-7 py-3.5 rounded-[999px] transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon />
            Escribime por WhatsApp
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            Ver servicios
            <ArrowDownIcon />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600"
        aria-hidden="true"
      >
        <ArrowDownIcon size={20} />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowDownIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
