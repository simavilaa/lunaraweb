"use client";

import AnimateIn from "./AnimateIn";

const row1 = [
  "Windows 11", "Windows Server 2022", "Ubuntu Server", "Debian GNU/Linux",
  "pfSense", "Proxmox VE", "VMware ESXi", "MikroTik RouterOS", "Cisco IOS",
];

const row2 = [
  "Active Directory", "Microsoft 365", "Veeam Backup", "Wireshark",
  "Malwarebytes EDR", "Ubiquiti UniFi", "TP-Link Omada", "Bash", "PowerShell",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-1.5" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "max-content",
          animation: `${reverse ? "marquee-rev" : "marquee-fwd"} ${reverse ? "38s" : "32s"} linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs whitespace-nowrap border border-gray-200 text-gray-600 rounded px-3 py-1.5"
            style={{ background: "#FAFAFA" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Herramientas() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-10">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Stack
          </span>
          <h2 className="font-serif text-[#1A1A2E] text-3xl sm:text-4xl">
            Herramientas y tecnologías
          </h2>
        </AnimateIn>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
