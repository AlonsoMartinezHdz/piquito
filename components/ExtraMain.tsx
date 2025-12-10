export default function ExtraMain() {
  return (
    <section
      className="relative py-20 sm:py-24 px-4 sm:px-6 font-inria text-white bg-center overflow-hidden"
    >
      {/* Fondo */}
      <img
        src="/imgs/senor-trabajo.jpg"
        alt="pasto"
        className="absolute inset-0 w-full h-full object-cover opacity-25 select-none pointer-events-none"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent"></div>

      {/* TEXTOS SUPERIORES */}
      <div className="text-center max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-14 relative z-10 px-2">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up leading-tight"
        >
          ¿Por qué elegir{" "}
          <span className="text-amber-600 drop-shadow-xl">Piquito</span>?
        </h1>

        <img
          src="/imgs/Piquitoo-Egg-logo.png"
          alt=""
          className="w-28 sm:w-36 md:w-40 mx-auto mt-2 sm:mt-3 animate-pulse-slow"
        />

        <h3
          className="text-base sm:text-lg text-white/90 leading-relaxed animate-fade-up [animation-delay:150ms] drop-shadow mt-4"
        >
          Más que huevos, ofrecemos calidad directa de granja, precios
          competitivos y entregas rápidas.
        </h3>
      </div>

      {/* GRID DE CARDS */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-8 
          max-w-5xl 
          mx-auto 
          relative z-10
          px-2
        "
      >
        {/* CARD 1 */}
        <div className="group p-6 rounded-2xl bg-amber-600 shadow-xl hover:scale-[1.04] hover:shadow-amber-500/30 transition duration-300 animate-fade-up">
          <span className="text-4xl sm:text-5xl mb-3 block">🌿</span>
          <h2 className="text-lg sm:text-xl font-semibold">Origen Responsable</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Gallinas criadas con bienestar animal garantizado.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group p-6 rounded-2xl bg-amber-600 shadow-xl hover:scale-[1.04] hover:shadow-amber-500/30 transition duration-300 animate-fade-up [animation-delay:100ms]">
          <span className="text-4xl sm:text-5xl mb-3 block">🔍</span>
          <h2 className="text-lg sm:text-xl font-semibold">Trazabilidad Completa</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Control directo desde la granja hasta tu mesa.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group p-6 rounded-2xl bg-amber-600 shadow-xl hover:scale-[1.04] hover:shadow-amber-500/30 transition duration-300 animate-fade-up [animation-delay:200ms]">
          <span className="text-4xl sm:text-5xl mb-3 block">📱</span>
          <h2 className="text-lg sm:text-xl font-semibold">Experiencia Digital</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Pedidos por WhatsApp, Web y próximamente apps de entrega.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="group p-6 rounded-2xl bg-amber-600 shadow-xl hover:scale-[1.04] hover:shadow-amber-500/30 transition duration-300 animate-fade-up [animation-delay:300ms]">
          <span className="text-4xl sm:text-5xl mb-3 block">📦</span>
          <h2 className="text-lg sm:text-xl font-semibold">Red en Crecimiento</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Desde bodegas hasta restaurantes, creciendo por Zacatecas.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="group p-6 rounded-2xl bg-amber-600 shadow-xl hover:scale-[1.04] hover:shadow-amber-500/30 transition duration-300 animate-fade-up [animation-delay:400ms]">
          <span className="text-4xl sm:text-5xl mb-3 block">🥚✨</span>
          <h2 className="text-lg sm:text-xl font-semibold">Frescura Garantizada</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Calidad superior = clientes felices siempre.
          </p>
        </div>
      </div>
    </section>
  );
}

