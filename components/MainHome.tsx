export default function MainHome() {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-8 items-center
        mt-8 px-4 md:px-6 lg:px-12
        mb-4
      "
    >
      {/* IMAGEN */}
      <div className="relative flex justify-center">
        <img
          src="/imgs/jerez.jpg"
          alt="Jerez"
          className="w-3/4 sm:w-2/3 md:w-1/2 rounded-4xl shadow-lg object-cover"
        />

        <div
          className="
            absolute -bottom-3 left-1/2 -translate-x-1/2 
            md:left-60 md:translate-x-0
            bg-amber-600 text-black px-4 py-2 
            rounded-full font-inria font-semibold
            text-sm sm:text-base
          "
        >
          100% Granja Local
        </div>
      </div>

      {/* TEXTO */}
      <div className="px-2 md:px-6">
        <h1
          className="
            font-inria text-4xl sm:text-5xl lg:text-6xl
            font-bold text-transparent bg-clip-text 
            bg-linear-to-r from-amber-700 to-orange-500 
            leading-tight
          "
        >
          Sabores del campo
          <br />
          De nuestra granja a tu mesa
        </h1>

        <p className="mt-4 text-base sm:text-lg text-black">
          Criados con cariño en Jerez — huevos frescos, sabor auténtico y
          tradición familiar. Prueba la diferencia que trae la alimentación
          natural y el cuidado diario.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold shadow">
            Comprar ahora
          </button>
          <button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-full hover:bg-amber-50">
            Conócenos
          </button>
        </div>

        <ul className="mt-6 text-sm text-black space-y-2">
          <li>🥚 Huevos frescos recogidos a mano</li>
          <li>🌿 Alimentación natural y sin aditivos</li>
          <li>🏡 Producción local y prácticas sostenibles</li>
        </ul>
      </div>
    </section>
  );
}
