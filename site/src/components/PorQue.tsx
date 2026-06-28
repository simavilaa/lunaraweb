import AnimateIn from "./AnimateIn";

const razones = [
  {
    icon: <PersonIcon />,
    title: "Hablás con el técnico directamente",
    desc: "No hay intermediarios ni call centers. Me contás el problema, lo entiendo, y te doy una respuesta real.",
  },
  {
    icon: <ClockIcon />,
    title: "Sin vueltas y sin letra chica",
    desc: "Presupuesto claro antes de tocar nada. Si no tiene solución viable, te lo digo. No cobro diagnósticos al pedo.",
  },
  {
    icon: <StarIcon />,
    title: "Experiencia real, no improvisada",
    desc: "Años trabajando con hardware, redes y sistemas. Diagnostico, planifico y ejecuto. Sin aprender a tu costa.",
  },
  {
    icon: <MapIcon />,
    title: "CABA y zona norte",
    desc: "Atención presencial en toda CABA y zona norte del GBA, hasta Escobar. Soporte remoto para el resto del país.",
  },
];

export default function PorQue() {
  return (
    <section id="por-que" className="py-24 bg-[#0F0E17] relative overflow-hidden">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Por qué Lunara
          </span>
          <h2 className="font-serif text-white text-4xl sm:text-5xl mb-4">
            El técnico que querías tener
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Sé lo frustrante que es no entender qué le pasa a tu equipo o que
            te cobren de más sin explicarte nada.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {razones.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 90}>
              <article className="bg-white/5 border border-white/10 rounded-[16px] p-6 hover:bg-white/[0.08] transition-colors duration-200 h-full">
                <div className="w-10 h-10 rounded-[10px] bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] mb-4">
                  {r.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
}
function ClockIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function StarIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
function MapIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
