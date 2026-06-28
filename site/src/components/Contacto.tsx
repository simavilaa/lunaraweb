import AnimateIn from "./AnimateIn";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Contacto
          </span>
          <h2 className="font-serif text-[#1A1A2E] text-4xl sm:text-5xl mb-4">
            Hablemos
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            El canal más rápido es WhatsApp. También podés escribirme por mail o
            redes si preferís.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: <WhatsAppIcon />,
              label: "WhatsApp Business",
              value: "Escribime ahora",
              href: "https://wa.me/5491100000000",
              primary: true,
              delay: 0,
            },
            {
              icon: <MailIcon />,
              label: "Email",
              value: "hola@lunarait.com",
              href: "mailto:hola@lunarait.com",
              primary: false,
              delay: 100,
            },
            {
              icon: <InstagramIcon />,
              label: "Instagram",
              value: "@lunarait",
              href: "https://instagram.com/lunarait",
              primary: false,
              delay: 200,
            },
          ].map((c) => (
            <AnimateIn key={c.label} delay={c.delay}>
              <ContactCard {...c} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  primary = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group flex flex-col items-center gap-3 rounded-[16px] border p-8 text-center transition-all duration-200 ${
        primary
          ? "bg-[#7C3AED] border-[#7C3AED] text-white hover:bg-[#5B21B6] hover:border-[#5B21B6]"
          : "bg-[#FAFAFA] border-gray-200 text-[#1A1A2E] hover:border-[#7C3AED]/40 hover:bg-[#EDE9FE]"
      }`}
    >
      <span
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          primary ? "bg-white/20" : "bg-[#EDE9FE] text-[#7C3AED]"
        }`}
      >
        {icon}
      </span>
      <span className={`text-xs font-semibold tracking-wider uppercase ${primary ? "text-white/70" : "text-gray-500"}`}>
        {label}
      </span>
      <span className={`font-semibold text-base ${primary ? "text-white" : "text-[#7C3AED]"}`}>
        {value}
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
