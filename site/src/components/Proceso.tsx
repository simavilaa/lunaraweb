"use client";

import { useEffect, useRef, useState } from "react";
import AnimateIn from "./AnimateIn";

type Line =
  | { type: "prompt"; cmd: string }
  | { type: "output"; text: string; status: "ok" | "running" | "pending" }
  | { type: "blank" }
  | { type: "cursor" };

const LINES: Line[] = [
  { type: "prompt", cmd: "./01-consulta.sh" },
  { type: "output", text: "brief recibido  —  WhatsApp · meet · mail", status: "ok" },
  { type: "blank" },
  { type: "prompt", cmd: "./02-diagnostico.sh --gratis" },
  { type: "output", text: "conectando al equipo...", status: "ok" },
  { type: "output", text: "diagnóstico completo. te explico todo.", status: "ok" },
  { type: "blank" },
  { type: "prompt", cmd: "./03-presupuesto.sh --sin-sorpresas" },
  { type: "output", text: "calculando repuestos y tiempos de trabajo...", status: "ok" },
  { type: "output", text: "presupuesto enviado. vos decidís si seguimos.", status: "ok" },
  { type: "blank" },
  { type: "prompt", cmd: "./04-solucion.sh --followup" },
  { type: "output", text: "aplicando solución...", status: "running" },
  { type: "output", text: "seguimiento post-entrega programado.", status: "pending" },
  { type: "cursor" },
];

const DELAYS: Record<Line["type"], number> = {
  prompt: 320,
  output: 180,
  blank: 80,
  cursor: 200,
};

export default function Proceso() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || visibleCount >= LINES.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      DELAYS[LINES[visibleCount].type]
    );
    return () => clearTimeout(timer);
  }, [started, visibleCount]);

  return (
    <section id="proceso" className="py-24 bg-[#0F0E17]">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 72%; }
        }
        .term-cursor { animation: blink 1s step-end infinite; }
        .term-progress { animation: progress 2.5s ease-out forwards; }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-12">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Cómo trabajo
          </span>
          <h2 className="font-serif text-white text-4xl sm:text-5xl mb-4">
            Sin vueltas
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Cuatro pasos desde que me escribís hasta que todo funciona.
          </p>
        </AnimateIn>

        <AnimateIn>
          <div
            ref={ref}
            className="rounded-[16px] overflow-hidden border border-white/10"
            style={{ background: "#0D0C14", boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)" }}
          >
            {/* Barra de título tipo macOS */}
            <div
              className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07]"
              style={{ background: "#13121E" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              <span className="ml-4 text-xs text-gray-600 font-mono tracking-wide">
                lunara-it — bash
              </span>
            </div>

            {/* Output de terminal */}
            <div className="p-6 sm:p-8 font-mono text-sm leading-7 min-h-[340px]">
              {LINES.slice(0, visibleCount).map((line, i) => {
                if (line.type === "blank") return <div key={i} className="h-2" />;

                if (line.type === "cursor") {
                  return (
                    <div key={i} className="flex items-center gap-1.5 mt-1">
                      <span className="text-[#7C3AED] text-xs">simon@lunara-it</span>
                      <span className="text-gray-700">:~$</span>
                      <span
                        className="term-cursor inline-block w-[7px] h-[15px] ml-1"
                        style={{ background: "#7C3AED", verticalAlign: "middle" }}
                      />
                    </div>
                  );
                }

                if (line.type === "prompt") {
                  return (
                    <div key={i} className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[#7C3AED] text-xs">simon@lunara-it</span>
                      <span className="text-gray-700">:~$</span>
                      <span className="text-white">{line.cmd}</span>
                    </div>
                  );
                }

                // output
                return (
                  <div key={i} className="flex items-start gap-3 pl-2">
                    <span className="text-gray-700 mt-0.5 shrink-0">›</span>
                    <span className="text-gray-400 flex-1">{line.text}</span>
                    <span className="shrink-0 ml-2">
                      {line.status === "ok" && (
                        <span className="text-[#28C840]">✓</span>
                      )}
                      {line.status === "running" && (
                        <span className="flex items-center gap-2">
                          <span className="inline-block h-1.5 bg-[#FFBD2E]/30 rounded-full w-20 overflow-hidden">
                            <span className="term-progress block h-full bg-[#FFBD2E] rounded-full" />
                          </span>
                          <span className="text-[#FFBD2E] text-xs">running</span>
                        </span>
                      )}
                      {line.status === "pending" && (
                        <span className="text-gray-600 text-xs">pending</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
