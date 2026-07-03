"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import AnimateIn from "./AnimateIn";

// ── Hook: toggle visible al entrar y salir del viewport ─────────────────────
function useDrawTrigger(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── prefers-reduced-motion ──────────────────────────────────────────────────
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

// ── Helper draw animation — rápido al borrar, escalonado al dibujar ─────────
function pv(visible: boolean, delay: number, dur = 0.85) {
  if (!visible) {
    return { strokeDashoffset: 1, transition: "stroke-dashoffset 0.35s cubic-bezier(.4,0,.2,1) 0s" };
  }
  return { strokeDashoffset: 0, transition: `stroke-dashoffset ${dur}s cubic-bezier(.4,0,.2,1) ${delay}s` };
}

// ── SVG 01: Reparación / Diagnóstico ───────────────────────────────────────
function IllustReparacion({ visible }: { visible: boolean }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="20" y="20" width="180" height="180" rx="8"
        stroke="#7C3AED" strokeWidth="2" pathLength="1" strokeDasharray="1" style={pv(visible, 0)} />
      <rect x="68" y="58" width="64" height="64" rx="5"
        stroke="#7C3AED" strokeWidth="2" pathLength="1" strokeDasharray="1" style={pv(visible, 0.14)} />
      <rect x="80" y="70" width="40" height="40" rx="2"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.4} pathLength="1" strokeDasharray="1" style={pv(visible, 0.28)} />
      {[78, 89, 100, 111, 122].map((x, i) => (
        <line key={i} x1={x} y1="58" x2={x} y2="51"
          stroke="#7C3AED" strokeWidth="1.2" strokeOpacity={0.35} pathLength="1" strokeDasharray="1"
          style={pv(visible, 0.33 + i * 0.03, 0.4)} />
      ))}
      <rect x="152" y="46" width="13" height="60" rx="2"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.44)} />
      <rect x="170" y="46" width="13" height="60" rx="2"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.51)} />
      <rect x="38" y="145" width="96" height="13" rx="2"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.57)} />
      <path d="M100 122 L100 138 L134 138"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.28} pathLength="1" strokeDasharray="1" style={pv(visible, 0.62, 0.6)} />
      <path d="M68 90 L40 90 L40 145"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.28} pathLength="1" strokeDasharray="1" style={pv(visible, 0.66, 0.6)} />
      <path d="M132 78 L152 78"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.28} pathLength="1" strokeDasharray="1" style={pv(visible, 0.7, 0.4)} />
      <path d="M152 106 L140 106 L140 122 L100 122"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.28} pathLength="1" strokeDasharray="1" style={pv(visible, 0.7, 0.6)} />
      <circle cx="100" cy="90" r="5" fill="#7C3AED"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0)", transformOrigin: "100px 90px", transition: "opacity 0.3s 1.05s, transform 0.4s 1.05s" }} />
      <circle cx="100" cy="90" r="14" stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.22}
        style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.2)", transformOrigin: "100px 90px", transition: "opacity 0.5s 1.15s, transform 0.5s 1.15s" }} />
    </svg>
  );
}

// ── SVG 02: Armado / Build ──────────────────────────────────────────────────
function IllustArmado({ visible }: { visible: boolean }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="62" y="18" width="96" height="184" rx="9"
        stroke="#7C3AED" strokeWidth="2" pathLength="1" strokeDasharray="1" style={pv(visible, 0)} />
      <rect x="77" y="32" width="62" height="82" rx="4"
        stroke="#7C3AED" strokeWidth="1.5" strokeOpacity={0.6} pathLength="1" strokeDasharray="1" style={pv(visible, 0.18)} />
      <circle cx="98" cy="54" r="10" stroke="#7C3AED" strokeWidth="1.2" pathLength="1" strokeDasharray="1" style={pv(visible, 0.33)} />
      <circle cx="98" cy="54" r="4" stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.4} pathLength="1" strokeDasharray="1" style={pv(visible, 0.43)} />
      <circle cx="124" cy="54" r="10" stroke="#7C3AED" strokeWidth="1.2" pathLength="1" strokeDasharray="1" style={pv(visible, 0.38)} />
      <circle cx="124" cy="54" r="4" stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.4} pathLength="1" strokeDasharray="1" style={pv(visible, 0.47)} />
      <rect x="82" y="80" width="56" height="18" rx="3"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.54)} />
      <line x1="82" y1="89" x2="138" y2="89"
        stroke="#7C3AED" strokeWidth="0.8" strokeOpacity={0.4} pathLength="1" strokeDasharray="1" style={pv(visible, 0.63, 0.5)} />
      <line x1="72" y1="122" x2="148" y2="122"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.32} pathLength="1" strokeDasharray="1" style={pv(visible, 0.68, 0.5)} />
      <line x1="72" y1="132" x2="148" y2="132"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.18} pathLength="1" strokeDasharray="1" style={pv(visible, 0.73, 0.5)} />
      <line x1="64" y1="32" x2="64" y2="170"
        stroke="#7C3AED" strokeWidth="2.5" strokeOpacity={0.16} pathLength="1" strokeDasharray="1" style={pv(visible, 0.84, 0.7)} />
      <circle cx="110" cy="179" r="8" stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.87)} />
      <path d="M110 173.5 L110 176.5 M107 175 A4.5 4.5 0 1 0 113 175"
        stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" style={pv(visible, 0.97, 0.45)} />
    </svg>
  );
}

// ── SVG 03: Upgrades / RAM ──────────────────────────────────────────────────
function IllustUpgrade({ visible }: { visible: boolean }) {
  const chips = [72, 84, 96, 108, 120];
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="22" y="158" width="176" height="22" rx="5"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0)} />
      <rect x="38" y="52" width="30" height="106" rx="3"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.18)} />
      {chips.map((y, i) => (
        <rect key={i} x="42" y={y} width="12" height="7" rx="1.5"
          stroke="#7C3AED" strokeWidth="0.8" strokeOpacity={0.45} pathLength="1" strokeDasharray="1"
          style={pv(visible, 0.32 + i * 0.05, 0.4)} />
      ))}
      <rect x="80" y="52" width="30" height="106" rx="3"
        stroke="#7C3AED" strokeWidth="1.5" pathLength="1" strokeDasharray="1" style={pv(visible, 0.26)} />
      {chips.map((y, i) => (
        <rect key={i} x="84" y={y} width="12" height="7" rx="1.5"
          stroke="#7C3AED" strokeWidth="0.8" strokeOpacity={0.45} pathLength="1" strokeDasharray="1"
          style={pv(visible, 0.4 + i * 0.05, 0.4)} />
      ))}
      <rect x="122" y="42" width="30" height="106" rx="3"
        stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="6 3"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s 0.72s" }} />
      <line x1="137" y1="152" x2="137" y2="161"
        stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" pathLength="1" strokeDasharray="1" style={pv(visible, 0.9, 0.35)} />
      <polyline points="131,156 137,163 143,156"
        stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={pv(visible, 0.95, 0.3)} />
      <line x1="166" y1="98" x2="194" y2="98"
        stroke="#7C3AED" strokeWidth="1.2" strokeOpacity={0.28} pathLength="1" strokeDasharray="1" style={pv(visible, 0.78, 0.4)} />
      <line x1="171" y1="110" x2="194" y2="110"
        stroke="#7C3AED" strokeWidth="1" strokeOpacity={0.18} pathLength="1" strokeDasharray="1" style={pv(visible, 0.83, 0.35)} />
      <line x1="176" y1="86" x2="194" y2="86"
        stroke="#7C3AED" strokeWidth="0.8" strokeOpacity={0.12} pathLength="1" strokeDasharray="1" style={pv(visible, 0.86, 0.3)} />
    </svg>
  );
}

// ── Bloque PC — padding reducido ────────────────────────────────────────────
function PCBlock({
  num, title, desc, flip = false, illustration,
}: {
  num: string; title: string; desc: string; flip?: boolean;
  illustration: (v: boolean) => ReactNode;
}) {
  const { ref, visible } = useDrawTrigger();
  return (
    <div
      ref={ref}
      className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16 py-10 lg:py-14 border-b border-gray-100 last:border-0`}
    >
      <div className="w-full lg:w-[44%] flex items-center justify-center">
        <div className="w-44 h-44 lg:w-[200px] lg:h-[200px]">
          {illustration(visible)}
        </div>
      </div>
      <div className={`w-full lg:w-[56%] ${flip ? "lg:text-right" : ""}`}>
        <span className="font-mono text-[#7C3AED] text-xs tracking-[0.22em] uppercase">{num}</span>
        <h3 className="font-serif text-[#1A1A2E] text-3xl sm:text-4xl mt-2 mb-4 leading-tight">{title}</h3>
        <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  );
}

// ── SVG ANTES: red desordenada con paquetes perdidos ────────────────────────
function AntesSVG({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      className="w-full"
      role="img"
      aria-label="Red desorganizada: los paquetes de datos se pierden antes de llegar a destino"
    >
      {/* Líneas de conexión — irregulares */}
      <line x1="47" y1="85" x2="96" y2="50" stroke="#F87171" strokeWidth="1" strokeOpacity="0.3"/>
      <line x1="116" y1="50" x2="157" y2="87" stroke="#F87171" strokeWidth="1" strokeOpacity="0.3"/>
      <path d="M47,88 Q95,115 157,90" stroke="#F87171" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 3"/>
      <line x1="181" y1="87" x2="228" y2="87" stroke="#F87171" strokeWidth="1" strokeOpacity="0.3"/>

      {/* Nodo A — PC origen */}
      <rect x="27" y="79" width="20" height="13" rx="1.5" fill="#130D0D" stroke="#6B7280" strokeWidth="1.2"/>
      <line x1="37" y1="92" x2="37" y2="98" stroke="#4B5563" strokeWidth="1"/>
      <line x1="33" y1="98" x2="41" y2="98" stroke="#4B5563" strokeWidth="1"/>

      {/* Nodo B — router con fallo */}
      <rect x="96" y="40" width="20" height="20" rx="2.5" fill="#1A0A0A" stroke="#F87171" strokeWidth="1.5"/>
      <line x1="100" y1="44" x2="112" y2="56" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="112" y1="44" x2="100" y2="56" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Alerta parpadeante sobre B */}
      <g>
        <path d="M106 10 L97 26 L115 26 Z" stroke="#F87171" strokeWidth="1.2" fill="#130808" strokeLinejoin="round"/>
        <line x1="106" y1="16" x2="106" y2="22" stroke="#F87171" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="106" cy="24.5" r="0.9" fill="#F87171"/>
        {!reduceMotion && (
          <animate attributeName="opacity" values="1;0.1;1" dur="1.5s" repeatCount="indefinite"/>
        )}
      </g>

      {/* Nodo C — switch */}
      <polygon points="169,75 181,87 169,99 157,87" fill="#100E1A" stroke="#6B7280" strokeWidth="1.2"/>

      {/* Nodo D — servidor inaccesible */}
      <rect x="228" y="73" width="22" height="28" rx="2" fill="#0F0E17" stroke="#374151" strokeWidth="1.2" strokeDasharray="3 2"/>
      <line x1="231" y1="80" x2="247" y2="80" stroke="#374151" strokeWidth="0.8"/>
      <line x1="231" y1="85" x2="247" y2="85" stroke="#374151" strokeWidth="0.8"/>
      <circle cx="245" cy="96" r="2" fill="#374151" fillOpacity="0.5"/>

      {/* Etiquetas */}
      <text x="23" y="112" fontSize="7.5" fill="#4B5563" fontFamily="monospace">Origen</text>
      <text x="224" y="113" fontSize="7.5" fill="#374151" fontFamily="monospace">Servidor</text>

      {/* Paquetes perdidos */}
      {!reduceMotion && (
        <>
          <circle cx="0" cy="0" r="3.5" fill="#F87171">
            <animateMotion path="M47,85 Q100,87 228,87" dur="2.8s" begin="0s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.04;0.1;0.46;0.62;1" dur="2.8s" begin="0s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="3.5" fill="#F87171">
            <animateMotion path="M37,79 L106,40 L169,87" dur="2.8s" begin="0.95s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.04;0.1;0.5;0.66;1" dur="2.8s" begin="0.95s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="3.5" fill="#F87171">
            <animateMotion path="M47,85 Q100,87 228,87" dur="2.8s" begin="1.9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.04;0.1;0.46;0.62;1" dur="2.8s" begin="1.9s" repeatCount="indefinite"/>
          </circle>
        </>
      )}
    </svg>
  );
}

// ── SVG DESPUÉS: red ordenada con paquetes que llegan ──────────────────────
function DespuesSVG({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      className="w-full"
      role="img"
      aria-label="Red organizada: los paquetes de datos llegan correctamente a destino"
    >
      {/* Líneas limpias */}
      <line x1="45" y1="29" x2="126" y2="80" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="45" y1="125" x2="126" y2="98" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="235" y1="29" x2="154" y2="80" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="235" y1="125" x2="154" y2="98" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.4"/>

      {/* Servidor central */}
      <rect x="126" y="74" width="28" height="30" rx="3" fill="#0A1A0A" stroke="#4ADE80" strokeWidth="1.8"/>
      <line x1="130" y1="81" x2="150" y2="81" stroke="#4ADE80" strokeWidth="0.8" strokeOpacity="0.7"/>
      <line x1="130" y1="86" x2="150" y2="86" stroke="#4ADE80" strokeWidth="0.8" strokeOpacity="0.7"/>
      <line x1="130" y1="91" x2="150" y2="91" stroke="#4ADE80" strokeWidth="0.8" strokeOpacity="0.7"/>
      <circle cx="149" cy="81" r="1.8" fill="#4ADE80"/>

      {/* PC1 NW */}
      <rect x="25" y="22" width="20" height="13" rx="1.5" fill="#0A130A" stroke="#6EE7B7" strokeWidth="1.2"/>
      <line x1="35" y1="35" x2="35" y2="41" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="31" y1="41" x2="39" y2="41" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      {/* PC2 SW */}
      <rect x="25" y="118" width="20" height="13" rx="1.5" fill="#0A130A" stroke="#6EE7B7" strokeWidth="1.2"/>
      <line x1="35" y1="131" x2="35" y2="137" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="31" y1="137" x2="39" y2="137" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      {/* PC3 NE */}
      <rect x="235" y="22" width="20" height="13" rx="1.5" fill="#0A130A" stroke="#6EE7B7" strokeWidth="1.2"/>
      <line x1="245" y1="35" x2="245" y2="41" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="241" y1="41" x2="249" y2="41" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      {/* PC4 SE */}
      <rect x="235" y="118" width="20" height="13" rx="1.5" fill="#0A130A" stroke="#6EE7B7" strokeWidth="1.2"/>
      <line x1="245" y1="131" x2="245" y2="137" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="241" y1="137" x2="249" y2="137" stroke="#4ADE80" strokeWidth="1" strokeOpacity="0.6"/>

      {/* Etiqueta servidor */}
      <text x="125" y="118" fontSize="7.5" fill="#4ADE80" fillOpacity="0.7" fontFamily="monospace">Servidor</text>

      {/* Paquetes exitosos */}
      {!reduceMotion && (
        <>
          <circle cx="0" cy="0" r="3.5" fill="#4ADE80">
            <animateMotion path="M35,28 L140,89" dur="2.2s" begin="0s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.86;1" dur="2.2s" begin="0s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="3.5" fill="#4ADE80">
            <animateMotion path="M35,124 L140,89" dur="2.2s" begin="0.55s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.86;1" dur="2.2s" begin="0.55s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="3.5" fill="#4ADE80">
            <animateMotion path="M140,89 L245,28" dur="2.2s" begin="1.1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.86;1" dur="2.2s" begin="1.1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="3.5" fill="#4ADE80">
            <animateMotion path="M140,89 L245,124" dur="2.2s" begin="1.65s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.86;1" dur="2.2s" begin="1.65s" repeatCount="indefinite"/>
          </circle>
        </>
      )}
    </svg>
  );
}

// ── Métrica ─────────────────────────────────────────────────────────────────
function MetricItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#7C3AED] mx-auto mb-3">
        {icon}
      </div>
      <p className="text-white text-sm font-semibold mb-1">{title}</p>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Chip de servicio ─────────────────────────────────────────────────────────
function ServiceChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <span className="text-gray-600">{icon}</span>
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </div>
  );
}

// ── Iconos ───────────────────────────────────────────────────────────────────
function LightningIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}
function BackupIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
}
function PersonIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function NetworkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4"/><line x1="12" y1="8" x2="12" y2="11"/></svg>;
}
function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function SupportIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}

// ── Sección empresas ─────────────────────────────────────────────────────────
function EmpresasSection() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="bg-[#0F0E17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <AnimateIn className="text-center pt-20 pb-10">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Para empresas y comercios
          </span>
          <h2 className="font-serif text-white text-4xl sm:text-5xl mb-3">
            De la incertidumbre al control
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Lo que encuentro en la mayoría de los casos — y cómo lo dejo.
          </p>
        </AnimateIn>

        {/* Paneles antes / después */}
        <AnimateIn delay={80}>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">

            {/* ANTES */}
            <div className="flex-1 min-w-0 relative rounded-2xl bg-[#110909] border border-red-500/15 overflow-hidden pt-7 pb-2 px-2">
              <span className="absolute top-3 left-4 font-mono text-[10px] font-bold tracking-[0.18em] text-red-400">
                ANTES
              </span>
              <AntesSVG reduceMotion={reduceMotion} />
            </div>

            {/* Flecha */}
            <div className="flex items-center justify-center text-[#7C3AED] py-1 md:py-0 shrink-0">
              <svg className="hidden md:block" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
              <svg className="md:hidden" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="5 12 12 19 19 12"/>
              </svg>
            </div>

            {/* DESPUÉS */}
            <div className="flex-1 min-w-0 relative rounded-2xl bg-[#090F09] border border-green-500/15 overflow-hidden pt-7 pb-2 px-2">
              <span className="absolute top-3 left-4 font-mono text-[10px] font-bold tracking-[0.18em] text-green-400">
                DESPUÉS · CON LUNARA
              </span>
              <DespuesSVG reduceMotion={reduceMotion} />
            </div>

          </div>
        </AnimateIn>

        {/* Métricas */}
        <AnimateIn delay={180} className="mt-10 sm:mt-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <MetricItem
              icon={<LightningIcon />}
              title="Diagnóstico rápido"
              desc="Evalúo y respondo en el día."
            />
            <MetricItem
              icon={<BackupIcon />}
              title="Backups al día"
              desc="Configurados y verificados."
            />
            <MetricItem
              icon={<PersonIcon />}
              title="Trato directo"
              desc="Un técnico, sin intermediarios."
            />
          </div>
        </AnimateIn>

        {/* Chips de servicios */}
        <AnimateIn delay={280}>
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-8 pb-20">
            <ServiceChip icon={<NetworkIcon />} label="Redes" />
            <span className="text-white/10 select-none">·</span>
            <ServiceChip icon={<ShieldIcon />} label="Ciberseguridad" />
            <span className="text-white/10 select-none">·</span>
            <ServiceChip icon={<SupportIcon />} label="Soporte IT" />
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function Servicios() {
  return (
    <section id="servicios">

      {/* PARTICULARES */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn className="text-center pt-20 pb-4">
            <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
              Particulares y hogares
            </span>
            <h2 className="font-serif text-[#1A1A2E] text-4xl sm:text-5xl">
              Tu PC, en buenas manos
            </h2>
          </AnimateIn>
          <div className="pb-6">
            <PCBlock
              num="01"
              title="Reparación y diagnóstico"
              desc="Te digo qué tiene tu PC antes de cobrar un peso. Diagnóstico gratuito, presupuesto claro, reparación sin vueltas."
              illustration={(v) => <IllustReparacion visible={v} />}
            />
            <PCBlock
              num="02"
              title="Armado a medida"
              desc="Te armo la PC para lo que necesitás: trabajo, diseño, gaming. Componentes con garantía y asesoramiento real."
              illustration={(v) => <IllustArmado visible={v} />}
              flip
            />
            <PCBlock
              num="03"
              title="Upgrades y mejoras"
              desc="Más RAM, SSD nuevo, cambio de placa de video. Le doy vida nueva a tu equipo sin tener que comprar uno nuevo."
              illustration={(v) => <IllustUpgrade visible={v} />}
            />
          </div>
        </div>
      </div>

      {/* EMPRESAS */}
      <EmpresasSection />

    </section>
  );
}
