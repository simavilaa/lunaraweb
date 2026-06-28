import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E17] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Marca */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-3" aria-label="Lunara IT">
              <Logo variant="mono" size={28} className="text-[#7C3AED]" />
              <span className="font-serif text-white text-lg leading-none">
                lunara<span className="text-[#7C3AED] font-sans font-semibold text-sm ml-0.5">IT</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm">Tecnología para personas y empresas.</p>
            <p className="text-gray-600 text-xs mt-1">CABA y zona norte · @lunarait</p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links del footer">
            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6" role="list">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#por-que", label: "Por qué Lunara" },
                { href: "#proceso", label: "Cómo trabajo" },
                { href: "#contacto", label: "Contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <span>© {year} Lunara IT. Todos los derechos reservados.</span>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
          >
            Contacto rápido por WhatsApp →
          </a>
        </div>
      </div>
    </footer>
  );
}
