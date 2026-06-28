import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-[#0F0E17] overflow-hidden"
      aria-label="Inicio"
    >
      <style>{`
        @keyframes lunara-grain {
          0%   { transform: translate(0, 0) }
          10%  { transform: translate(-2%, -3%) }
          20%  { transform: translate(3%, 2%) }
          30%  { transform: translate(-1%, 3%) }
          40%  { transform: translate(2%, -2%) }
          50%  { transform: translate(-3%, 1%) }
          60%  { transform: translate(1%, -3%) }
          70%  { transform: translate(3%, 3%) }
          80%  { transform: translate(-2%, 2%) }
          90%  { transform: translate(2%, -1%) }
          100% { transform: translate(0, 0) }
        }
        @keyframes lunara-glow-breathe {
          0%, 100% { opacity: 0.12; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.22; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes lunara-glow-drift {
          0%, 100% { opacity: 0.06; transform: translate(-30%, -60%) scale(1); }
          50%       { opacity: 0.13; transform: translate(-70%, -40%) scale(1.2); }
        }
      `}</style>

      {/* Grain animado — textura tipo 35mm */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-2.5%",
          left: "-2.5%",
          width: "105%",
          height: "105%",
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          animation: "lunara-grain 8s steps(1) infinite",
          pointerEvents: "none",
        }}
      />

      {/* Glow principal — respira */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          animation: "lunara-glow-breathe 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Glow secundario — flota en diagonal */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,33,182,0.15) 0%, transparent 65%)",
          animation: "lunara-glow-drift 9s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo + nombre */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <Logo variant="color" size={72} />
          <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
            lunara
            <span className="text-[#7C3AED] font-sans font-bold text-3xl sm:text-4xl align-super ml-1">
              IT
            </span>
          </h1>
        </div>

        {/* Propuesta de valor */}
        <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-light leading-snug max-w-2xl mx-auto mb-4">
          Tecnología para personas y empresas.
        </p>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-12">
          Desde reparar tu PC hasta montar la red de tu empresa.
          Un técnico real, en CABA y zona norte.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Flecha scroll */}
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
