"use client";

import AnimateIn from "./AnimateIn";

const puntos = [
  {
    contra: "Desaparece después de cobrar",
    pro:    "Quedo disponible por si algo pasa",
  },
  {
    contra: "Te habla en difícil, no entendés nada",
    pro:    "Te explico todo claro, sin vueltas",
  },
  {
    contra: "Te cambia cosas que no hacían falta",
    pro:    "Solo toco lo que hay que tocar",
  },
  {
    contra: "Presupuesto que después crece",
    pro:    "Presupuesto claro de entrada",
  },
  {
    contra: "Tarda días en contestarte",
    pro:    "Respondo rápido cuando me escribís",
  },
];

export default function PorQue() {
  return (
    <section id="por-que" className="py-24 bg-[#0F0E17] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <span className="inline-block text-[#7C3AED] text-xs font-semibold tracking-widest uppercase mb-4">
            Por qué Lunara
          </span>
          <h2 className="font-serif text-white text-4xl sm:text-5xl mb-4">
            La diferencia se nota
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
            No es magia. Es tratar bien al cliente, explicar las cosas, y hacer el trabajo como corresponde.
          </p>
        </AnimateIn>

        {/* Comparison table */}
        <AnimateIn delay={120}>
          <div className="flex flex-col md:flex-row">

            {/* Left — El técnico promedio */}
            <div className="flex-1 border border-white/10 md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none bg-white/[0.025] overflow-hidden">
              <div className="px-6 py-5 border-b border-white/10">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-500">
                  El técnico promedio
                </span>
              </div>
              <ul>
                {puntos.map((p, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 px-6 py-4 ${
                      i < puntos.length - 1 ? "border-b border-white/[0.06]" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-500 text-sm leading-snug">{p.contra}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Con Lunara */}
            <div
              className="flex-1 md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none overflow-hidden"
              style={{
                border: "1.5px solid #7C3AED",
                background: "linear-gradient(160deg, rgba(124,58,237,0.10) 0%, rgba(124,58,237,0.04) 100%)",
                boxShadow: "0 0 48px rgba(124,58,237,0.18), inset 0 1px 0 rgba(124,58,237,0.25)",
              }}
            >
              <div className="px-6 py-5 border-b border-[#7C3AED]/30">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A78BFA]">
                  Con Lunara
                </span>
              </div>
              <ul>
                {puntos.map((p, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 px-6 py-4 ${
                      i < puntos.length - 1 ? "border-b border-[#7C3AED]/15" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#7C3AED]/20 flex items-center justify-center"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1.5 5l3 3 4-6" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-white text-sm leading-snug font-medium">{p.pro}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </AnimateIn>

        {/* Closing quote */}
        <AnimateIn delay={240} className="text-center mt-14">
          <p className="font-serif italic text-gray-300 text-xl sm:text-2xl max-w-lg mx-auto leading-relaxed">
            "Trabajo como me gustaría que me traten a mí."
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
