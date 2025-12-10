"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUMNA 1 */}
        <div className="text-center md:text-left">
          <h3 className="font-inria text-2xl font-bold text-[#C45206]">PIQUITO</h3>
          <p className="mt-3 text-sm text-gray-300">
            Granja familiar en Jerez — huevos frescos y tradición local. Calidad y sabor directo a tu mesa.
          </p>

          <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 8v6a3 3 0 1 0 3-3V6h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 flex items-center justify-center bg-emerald-500 text-white rounded-full transition hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12.05A9 9 0 1 0 11.95 21L7 22l1.1-4.95A8.96 8.96 0 0 0 21 12.05z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5 14.5c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.18.2-.36.23-.66.08-.3-.15-1.14-.42-2.17-1.34-.8-.7-1.34-1.56-1.5-1.86-.16-.3-.02-.46.12-.61.12-.12.27-.3.4-.45.13-.15.18-.26.3-.43.12-.17.05-.32-.02-.45-.07-.13-.67-1.6-.92-2.19-.24-.57-.48-.49-.67-.5l-.57-.01c-.18 0-.47.07-.72.32-.24.24-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.12.18 1.84 2.86 4.45 3.9 2.61 1.05 2.61.7 3.08.66.47-.04 1.5-.61 1.71-1.2.2-.6.2-1.12.14-1.23-.07-.12-.27-.18-.57-.33z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="/home" className="hover:text-amber-400">Inicio</a></li>
            <li><a href="/nuestro_huevo" className="hover:text-amber-400">Nuestro Huevo</a></li>
            <li><a href="/sobre_nosotros" className="hover:text-amber-400">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="hover:text-amber-400">Contacto</a></li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold">Contacto</h4>

          <p className="mt-3 text-sm text-gray-300">
            Teléfono: <a href="tel:+521234567890" className="hover:text-amber-400">+52 1 234 567 890</a>
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Email: <a href="mailto:info@piquito.local" className="hover:text-amber-400">info@piquito.local</a>
          </p>

          <form className="mt-4 flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Correo"
              placeholder="Tu correo"
              className="bg-white/5 placeholder-gray-400 text-white px-3 py-2 rounded-md text-sm focus:outline-none w-full"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm">
              Suscribir
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Piquito — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
