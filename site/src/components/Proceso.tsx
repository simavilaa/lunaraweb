import AnimateIn from "./AnimateIn";

const pasos = [
  {
    num: "01",
    title: "Me contás el problema",
    desc: "Por WhatsApp o mail describís qué pasa. Sin formularios, sin burocracia. Si es difícil de explicar por escrito, coordinamos un llamado o meet.",
  },
  {
    num: "02",
    title: "Diagnóstico gratuito",
    desc: "Revisamos el equipo. Presencial en CABA y zona norte, o por acceso remoto si aplica. Te explico qué encontré en términos claros.",
  },
  {
    num: "03",
    title: "Presupuesto sin sorpresas",
    desc: "Te mando el costo total antes de tocar nada. Vos decidís si seguimos. Sin letra chica.",
  },
  {
    num: "04",
    title: "Solución y seguimiento",
    desc: "Ejecuto el trabajo y quedo disponible por si surge algo. No desaparezco después de cobrar.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 bg-[#F4F4F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Cómo trabajo
          </span>
          <h2 className="font-serif text-[#1A1A2E] text-4xl sm:text-5xl mb-4">
            Simple y sin vueltas
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Cuatro pasos desde que me escribís hasta que el problema está resuelto.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, i) => (
            <AnimateIn key={paso.num} delay={i * 100}>
              <article className="bg-white rounded-[16px] p-6 border border-gray-200 h-full">
                <span className="font-mono text-4xl font-bold text-[#7C3AED]/20 block mb-3 leading-none">
                  {paso.num}
                </span>
                <h3 className="font-semibold text-[#1A1A2E] text-base mb-2">{paso.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
