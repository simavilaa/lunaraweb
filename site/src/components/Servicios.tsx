const particulares = [
  {
    icon: <WrenchIcon />,
    title: "Reparación de PCs",
    desc: "Diagnóstico y reparación de computadoras de escritorio y notebooks. Sin vueltas, sin letra chica.",
  },
  {
    icon: <CpuIcon />,
    title: "Armado a medida",
    desc: "Te armo la PC para lo que necesitás: trabajo, diseño, gaming. Presupuesto honesto y componentes con garantía.",
  },
  {
    icon: <UpgradeIcon />,
    title: "Upgrades y mejoras",
    desc: "Más RAM, SSD nuevo, cambio de placa de video. Le doy vida nueva a tu equipo sin tener que comprar uno nuevo.",
  },
];

const empresas = [
  {
    icon: <NetworkIcon />,
    title: "Redes e infraestructura",
    desc: "Instalación y configuración de redes, switches y access points. Que todo funcione y escale cuando lo necesitás.",
  },
  {
    icon: <ShieldIcon />,
    title: "Ciberseguridad básica",
    desc: "Backups automáticos, contraseñas seguras, antivirus configurado, accesos controlados. Lo esencial que protege de verdad.",
  },
  {
    icon: <SupportIcon />,
    title: "Soporte IT",
    desc: "Mantenimiento preventivo, soporte remoto y presencial para empresas que necesitan un técnico de confianza.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Servicios
          </span>
          <h2 className="font-serif text-[#1A1A2E] text-4xl sm:text-5xl mb-4">
            Lo que hago
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Desde la PC de tu casa hasta la infraestructura de tu empresa.
          </p>
        </div>

        {/* Particulares */}
        <div className="mb-16">
          <h3 className="text-[#1A1A2E] font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#7C3AED] block" aria-hidden="true" />
            Para particulares y hogares
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {particulares.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Empresas */}
        <div>
          <h3 className="text-[#1A1A2E] font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#7C3AED] block" aria-hidden="true" />
            Para empresas y comercios
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {empresas.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <article className="group bg-[#FAFAFA] hover:bg-[#EDE9FE] border border-gray-200 hover:border-[#7C3AED]/30 rounded-[16px] p-6 transition-all duration-200">
      <div className="w-10 h-10 rounded-[10px] bg-[#EDE9FE] group-hover:bg-white flex items-center justify-center text-[#7C3AED] mb-4 transition-colors duration-200">
        {icon}
      </div>
      <h4 className="font-semibold text-[#1A1A2E] text-base mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </article>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function UpgradeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 11 12 6 7 11" />
      <line x1="12" y1="6" x2="12" y2="18" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4" />
      <line x1="12" y1="8" x2="12" y2="11" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
