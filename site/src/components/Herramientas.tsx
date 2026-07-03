"use client";

import AnimateIn from "./AnimateIn";
import { type ReactNode, useState } from "react";

type Brand = { name: string; logo: ReactNode; color: string };

// ── Logo SVGs ────────────────────────────────────────────────────────────────

function LogoWindows() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1"  y="3"   width="10" height="9" rx="0.5" fill="#F25022"/>
      <rect x="13" y="1.2" width="10" height="9" rx="0.5" fill="#7FBA00"/>
      <rect x="1"  y="13"  width="10" height="9" rx="0.5" fill="#00A4EF"/>
      <rect x="13" y="13"  width="10" height="9" rx="0.5" fill="#FFB900"/>
    </svg>
  );
}

function LogoUbuntu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#E95420" strokeWidth="1.8"/>
      <circle cx="12" cy="3.5" r="2.2" fill="#E95420"/>
      <circle cx="19.3" cy="17" r="2.2" fill="#E95420"/>
      <circle cx="4.7"  cy="17" r="2.2" fill="#E95420"/>
      <path d="M12 5.7L19.3 17M12 5.7L4.7 17M4.7 17h14.6" stroke="#E95420" strokeWidth="1.2"/>
    </svg>
  );
}

function LogoDebian() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#D70A53" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm2.5-3.8c.1-.3.5-2.2-1-3.7S9 5 9.5 3.5c0 0 .5 1 2.5 1s4.5 2.7 4.5 5c0 2.8-2 5.2-4.5 5.5.5-.5 1-1.3 1-2.3z"/>
    </svg>
  );
}

function LogoCisco() {
  return (
    <svg viewBox="0 0 24 24" fill="#1BA0D7" aria-hidden="true">
      <rect x="1"    y="10" width="2"   height="4"  rx="1"/>
      <rect x="4.2"  y="8"  width="2"   height="8"  rx="1"/>
      <rect x="7.4"  y="6"  width="2"   height="12" rx="1"/>
      <rect x="10.6" y="5"  width="2.8" height="14" rx="1"/>
      <rect x="14.6" y="6"  width="2"   height="12" rx="1"/>
      <rect x="17.8" y="8"  width="2"   height="8"  rx="1"/>
      <rect x="21"   y="10" width="2"   height="4"  rx="1"/>
    </svg>
  );
}

function LogoPfSense() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.5L3.5 7v5.5c0 4.8 3.6 9.3 8.5 10.5 4.9-1.2 8.5-5.7 8.5-10.5V7L12 2.5z"
        fill="#D41F31" fillOpacity="0.12" stroke="#D41F31" strokeWidth="1.4"/>
      <rect x="7.5" y="8.5"  width="9" height="1.8" rx="0.9" fill="#D41F31"/>
      <rect x="7.5" y="11.5" width="6" height="1.8" rx="0.9" fill="#D41F31"/>
      <rect x="7.5" y="14.5" width="7.5" height="1.8" rx="0.9" fill="#D41F31"/>
    </svg>
  );
}

function LogoProxmox() {
  return (
    <svg viewBox="0 0 24 24" fill="#E57000" aria-hidden="true">
      <rect x="3"    y="4" width="7"   height="16" rx="1.5"/>
      <rect x="11.5" y="4" width="4.5" height="7"  rx="1.5"/>
      <rect x="11.5" y="13" width="9.5" height="7" rx="1.5"/>
    </svg>
  );
}

function LogoVMware() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 8v8l10 6 10-6V8L12 2z" stroke="#607078" strokeWidth="1.5"/>
      <path d="M2 8l10 6 10-6"                  stroke="#607078" strokeWidth="1.5"/>
    </svg>
  );
}

function LogoFortinet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L4 6.5v7c0 4.5 3.3 8.8 8 10.5 4.7-1.7 8-6 8-10.5v-7L12 2z"
        fill="#EE3124" fillOpacity="0.1" stroke="#EE3124" strokeWidth="1.4"/>
      <path d="M8.5 8h7v2.5H11v2h4v2.5h-4v3.5H8.5V8z" fill="#EE3124"/>
    </svg>
  );
}

function LogoMicrosoft365() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1"  y="1"  width="10" height="10" rx="1" fill="#F25022"/>
      <rect x="13" y="1"  width="10" height="10" rx="1" fill="#7FBA00"/>
      <rect x="1"  y="13" width="10" height="10" rx="1" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" rx="1" fill="#FFB900"/>
    </svg>
  );
}

function LogoUniFi() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#0559C9" strokeWidth="1.5"/>
      <path d="M8.5 8.5v5.5a3.5 3.5 0 0 0 7 0V8.5"
        stroke="#0559C9" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function LogoMikroTik() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19V5l4 7 5-7 5 7 4-7v14"
        stroke="#293239" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoTPLink() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#4CBFF0" strokeWidth="1.5"/>
      <path d="M14 4L10 12h5L9 20"
        stroke="#4CBFF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoMalwarebytes() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#00B3E6"/>
      <path d="M5.5 17V7.5l3.5 4.8 3.5-4.8 3.5 4.8V7.5H18V17h-2.2l-3.3-4.5L9.2 17z" fill="white"/>
    </svg>
  );
}

function LogoVeeam() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5l9 14L21 5h-4.5l-4.5 7-4.5-7z" fill="#00B336"/>
    </svg>
  );
}

function LogoWireshark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 16l3-8 3 5 3-7 3 6 3-8 3 6 2-5"
        stroke="#1679A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="2" y1="20" x2="22" y2="20" stroke="#1679A7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function LogoPowerShell() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="2.5" fill="#012456"/>
      <path d="M5 15.5l5.5-5.5L5 9"
        stroke="#5FB4E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="13" y1="15.5" x2="19" y2="15.5" stroke="#5FB4E2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function LogoBash() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="2.5" fill="#1D2D35"/>
      <path d="M6 9l5 3.5L6 16"
        stroke="#4EAA25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="13" y1="16" x2="18" y2="16" stroke="#4EAA25" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function LogoActiveDirectory() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" fill="#0078D4"/>
      <path d="M4.5 21v-1.5a7.5 7.5 0 0 1 15 0V21"
        stroke="#0078D4" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="4.5"  cy="11" r="2" fill="#0078D4" fillOpacity="0.55"/>
      <circle cx="19.5" cy="11" r="2" fill="#0078D4" fillOpacity="0.55"/>
    </svg>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function hexRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ── Brand data ───────────────────────────────────────────────────────────────

const row1: Brand[] = [
  { name: "Windows",      logo: <LogoWindows />,     color: "#00A4EF" },
  { name: "Ubuntu",       logo: <LogoUbuntu />,      color: "#E95420" },
  { name: "Debian",       logo: <LogoDebian />,      color: "#D70A53" },
  { name: "Cisco",        logo: <LogoCisco />,       color: "#1BA0D7" },
  { name: "pfSense",      logo: <LogoPfSense />,     color: "#D41F31" },
  { name: "Proxmox VE",   logo: <LogoProxmox />,     color: "#E57000" },
  { name: "VMware ESXi",  logo: <LogoVMware />,      color: "#607078" },
  { name: "Fortinet",     logo: <LogoFortinet />,    color: "#EE3124" },
];

const row2: Brand[] = [
  { name: "Microsoft 365", logo: <LogoMicrosoft365 />, color: "#F25022" },
  { name: "UniFi",         logo: <LogoUniFi />,        color: "#0559C9" },
  { name: "MikroTik",      logo: <LogoMikroTik />,     color: "#5a8fa8" },
  { name: "TP-Link Omada", logo: <LogoTPLink />,       color: "#4CBFF0" },
  { name: "Malwarebytes",  logo: <LogoMalwarebytes />, color: "#00B3E6" },
  { name: "Veeam",         logo: <LogoVeeam />,        color: "#00B336" },
  { name: "Wireshark",     logo: <LogoWireshark />,    color: "#1679A7" },
  { name: "PowerShell",    logo: <LogoPowerShell />,   color: "#5FB4E2" },
];

const row3: Brand[] = [
  { name: "Active Directory", logo: <LogoActiveDirectory />, color: "#0078D4" },
  { name: "Bash",             logo: <LogoBash />,             color: "#4EAA25" },
  { name: "Windows Server",   logo: <LogoWindows />,          color: "#00A4EF" },
  { name: "Cisco IOS",        logo: <LogoCisco />,            color: "#1BA0D7" },
  { name: "pfSense",          logo: <LogoPfSense />,          color: "#D41F31" },
  { name: "Wireshark",        logo: <LogoWireshark />,        color: "#1679A7" },
  { name: "UniFi",            logo: <LogoUniFi />,            color: "#0559C9" },
  { name: "Fortinet",         logo: <LogoFortinet />,         color: "#EE3124" },
];

// ── Tile ─────────────────────────────────────────────────────────────────────

function BrandTile({ brand }: { brand: Brand }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center gap-2.5 w-[92px] h-[80px] flex-shrink-0 rounded-2xl border bg-white cursor-default select-none"
      style={{
        filter:      hovered ? "grayscale(0)" : "grayscale(1)",
        opacity:     hovered ? 1 : 0.55,
        transform:   hovered ? "scale(1.13)" : "scale(1)",
        borderColor: hovered ? hexRgba(brand.color, 0.45) : "rgb(243 244 246)",
        boxShadow:   hovered
          ? `0 0 18px ${hexRgba(brand.color, 0.55)}, 0 4px 28px ${hexRgba(brand.color, 0.22)}`
          : "none",
        transition: "filter 0.15s ease-out, opacity 0.15s ease-out, transform 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.15s ease-out",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {brand.logo}
      </div>
      <span className="font-mono text-[9px] text-gray-400 text-center leading-tight px-1 w-full truncate">
        {brand.name}
      </span>
    </div>
  );
}

// ── Marquee row ───────────────────────────────────────────────────────────────

function MarqueeRow({
  items,
  reverse = false,
  scanDelay = "0s",
}: {
  items: Brand[];
  reverse?: boolean;
  scanDelay?: string;
}) {
  const doubled = [...items, ...items];
  const dur  = reverse ? "26s" : "22s";
  const anim = reverse ? "marquee-rev" : "marquee-fwd";

  return (
    <div
      className="overflow-hidden py-2 relative group/row"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      {/* Scan light sweeping across the row */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-[100px] z-10"
        style={{
          background: "linear-gradient(to right, transparent, rgba(124,58,237,0.1) 50%, transparent)",
          animation: "scan-sweep 5s ease-in-out infinite",
          animationDelay: scanDelay,
        }}
      />
      <div
        className="flex gap-3 w-max group-hover/row:[animation-play-state:paused]"
        style={{ animation: `${anim} ${dur} linear infinite` }}
      >
        {doubled.map((brand, i) => (
          <BrandTile key={i} brand={brand} />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Herramientas() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes scan-sweep {
          0%   { transform: translateX(-120px); opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-12">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Stack de trabajo
          </span>
          <h2 className="font-serif text-[#1A1A2E] text-4xl sm:text-5xl mb-3">
            Lo que uso todos los días
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Herramientas y plataformas con las que trabajo en cada proyecto.
          </p>
        </AnimateIn>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} scanDelay="0s" />
        <MarqueeRow items={row2} reverse scanDelay="1.7s" />
        <MarqueeRow items={row3} scanDelay="3.4s" />
      </div>
    </section>
  );
}
