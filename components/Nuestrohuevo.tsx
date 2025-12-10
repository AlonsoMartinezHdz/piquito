export default function Nuestrohuevo() {
    return (
        <div className="min-h-screen w-full text-black pt-16">
            
            {/* SECTION 1 – IMAGEN + TEXTO */}
            <section className="grid grid-cols-1 md:grid-cols-2 mb-24 md:mb-40 px-4 md:px-8 lg:px-16">

                {/* IMAGEN PRINCIPAL */}
                <div className="relative flex justify-center md:justify-start">
                    <img 
                        src="/imgs/cartera_huevos.jpg" 
                        alt="cartera" 
                        className="rounded-4xl shadow-2xl shadow-amber-700 opacity-0 animate-slideUp w-10/12 md:w-full"
                    />
                    {/* TEXTO SOBRE IMAGEN */}
                    <div className="
                        absolute bottom-6  md:bottom-2/5 left-32 md:left- -translate-x-1/2 md:translate-x-0
                        text-black font-inria text-2xl font-bold 
                        tracking-tight drop-shadow-lg hover:text-amber-700
                        animate-slideUp
                    ">
                        Piquito
                    </div>
                </div>

                {/* TEXTO DERECHA */}
                <div className="px-4 md:px-10 lg:px-16 flex flex-col justify-center items-center">
                    <h1 className="font-inria text-5xl md:text-7xl font-bold mt-12 md:mt-22 mb-12 md:mb-16 text-center animate-slideRight">
                        Nuestro Huevo
                    </h1>

                    <p className="text-lg mb-10 md:mb-14 p-4 rounded-xl font-inria transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-amber-600 hover:shadow-amber-600 hover:font-bold animate-slideUp">
                        En Granja Piquito, cada huevo es el resultado de un cuidado meticuloso
                        y una dedicación inquebrantable a la calidad. Nuestras gallinas son criadas
                        en un entorno natural, permitiéndoles moverse libremente y disfrutar de
                        una dieta balanceada.
                    </p>

                    <p className="text-lg mb-4 p-4 rounded-xl font-inria transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-600 hover:font-bold animate-slideUp">
                        El proceso de recolección es manual, asegurando que cada huevo sea
                        manejado con cuidado para preservar su frescura y sabor. De Jerez a tu mesa,
                        ofrecemos huevos deliciosos y un reflejo de nuestra pasión por el bienestar animal.
                    </p>

                    {/* BADGES */}
                    <div className="mt-4 flex flex-wrap gap-3 justify-center">
                        <span className="inline-flex items-center gap-2 bg-white/5 text-sm px-3 py-2 rounded-full shadow-amber-700 shadow-md">
                            🥚 Frescura diaria
                        </span>
                        <span className="inline-flex items-center gap-2 bg-white/5 text-sm px-3 py-2 rounded-full shadow-amber-700 shadow-md">
                            ✋ Recolección manual
                        </span>
                        <span className="inline-flex items-center gap-2 bg-white/5 text-sm px-3 py-2 rounded-full shadow-amber-700 shadow-md">
                            🐔 Bienestar animal
                        </span>
                    </div>

                    {/* FORMULA ANIMADA */}
                    <div className="mt-8 flex flex-col items-center select-none">
                        <span className="text-6xl md:text-7xl text-black font-inria mb-2">“</span>

                        <div className="flex flex-col items-center leading-none space-y-1">
                            {['F','O','R','M','U','L','A'].map((ch) => (
                                <span 
                                    key={ch} 
                                    className="text-5xl md:text-6xl font-inria text-black hover:text-amber-600 transition duration-200 transform hover:scale-110"
                                >
                                    {ch}
                                </span>
                            ))}
                        </div>

                        <span className="text-6xl md:text-7xl text-black mt-2 font-inria">”</span>

                        <svg className="w-10 h-10 md:w-12 md:h-12 text-black animate-bounce mt-4" fill="none" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </section>

            {/* PÁRRAFOS DE TRANSICIÓN */}
            <p className="text-lg md:text-xl lg:text-2xl -mt-10 md:-mt-20 text-black max-w-3xl mx-auto leading-relaxed font-inria font-medium tracking-wide px-4 text-center">
                Descubre la diferencia que un huevo de Granja Piquito puede hacer en tus recetas diarias.
                Calidad, frescura y sabor en cada bocado.
            </p>

            <p className="mt-4 text-sm md:text-base text-black font-inria font-medium max-w-2xl mx-auto text-center px-4">
                ¿Ves? Todo esto se ocupa para generar un huevo <span aria-hidden="true">🥚</span>
            </p>

            {/* FORMULA IMAGES SECTION */}
            <section className="mt-12 px-4 md:px-16 mb-32">
                <div className="max-w-6xl mx-auto rounded-3xl p-4 md:p-10">

                    <div className="grid grid-cols-12 gap-6 items-stretch">

                        {/* IMAGEN GRANDE */}
                        <div className="col-span-12 md:col-span-7 row-span-2">
                            <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-amber-700">
                                <img 
                                    src="/imgs/granos-diversos.jpg" 
                                    alt="Granos diversos" 
                                    className="w-full h-72 md:h-full object-cover rounded-4xl transform transition duration-500 ease-out hover:scale-105"
                                />
                                <div className="absolute left-6 bottom-6 bg-black/40 text-white px-4 py-2 rounded-xl text-sm">
                                    Núcleo, minerales y sales
                                </div>
                            </div>
                        </div>

                        {/* IMÁGENES DERECHA */}
                        <div className="col-span-12 md:col-span-5 flex flex-col gap-6">

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-700">
                                <img 
                                    src="/imgs/maiz_grano.jpg" 
                                    alt="Maíz"
                                    className="w-full h-48 object-cover rounded-3xl transform transition duration-400 hover:scale-105"
                                />
                                <div className="absolute left-4 bottom-4 bg-black/30 text-white px-3 py-1 rounded-lg text-xs">
                                    Maíz
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                                    <img 
                                        src="/imgs/pasta_soya.jpg" 
                                        alt="Pasta de soya"
                                        className="w-full h-40 object-cover rounded-2xl transform transition duration-400 hover:scale-105"
                                    />
                                    <div className="absolute left-3 bottom-3 bg-black/30 text-white px-2 py-1 rounded text-xs">
                                        Pasta de soya
                                    </div>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                                    <img 
                                        src="/imgs/calcio.jpg" 
                                        alt="Calcio"
                                        className="w-full h-40 object-cover rounded-2xl transform transition duration-400 hover:scale-105"
                                    />
                                    <div className="absolute left-3 bottom-3 bg-black/30 text-white px-2 py-1 rounded text-xs">
                                        Calcio
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-amber-700">
                                <img 
                                    src="/imgs/alfalfa.jpg" 
                                    alt="Alfalfa"
                                    className="w-full h-40 object-cover rounded-xl transform transition duration-400 hover:scale-105"
                                />
                                <div className="absolute left-3 bottom-3 bg-black/30 text-white px-2 py-1 rounded text-xs">
                                    Alfalfa
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
