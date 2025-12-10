

// export default function SobreNosotros() {
//     return (
//         <section className="relative py-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="grid grid-cols-12 gap-6 items-start">

//                     {/* Left: Big image area (primary) */}
//                     <div className="col-span-12 md:col-span-8">
//                         <div className="grid grid-cols-12 gap-6">
//                             <div className="col-span-12 md:col-span-8">
//                                 <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-700">
//                                     <img
//                                         src="/imgs/gallina_mira.jpg"
//                                         alt="gallina mira"
//                                         className="w-full h-[520px] md:h-[640px] object-cover animate-slideRight"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
//                                 <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
//                                     <img
//                                         src="/imgs/nina-acaricia_gallina.jpg"
//                                         alt="nina con gallinas"
//                                         className="w-full h-[520px] md:h-[640px] object-cover animate-slideRight"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right: Text (secondary) */}
//                     <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
//                         <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
//                             <h2 className="font-inria text-3xl md:text-4xl font-bold mb-3 animate-typewriter">¿Por qué huevos?</h2>
//                             <p className="text-sm md:text-base text-black">
//                                 El huevo es parte de la canasta básica y en Piquito lo producimos con responsabilidad y cariño. Nuestro objetivo
//                                 es ofrecer producto fresco a precio justo y apoyar a las familias locales.
//                             </p>
//                         </div>

//                         <div className="p-4 rounded-xl flex items-center gap-4">
//                             <div className="text-3xl">🥚</div>
//                             <div>
//                                 <p className="text-sm text-black font-medium">¿Ves? Todo esto se ocupa para generar un huevo</p>
//                                 <p className="text-xs text-black">Calidad, alimentación balanceada y cuidado diario.</p>
//                             </div>
//                         </div>

//                         <div className="rounded-xl overflow-hidden shadow-amber-700 shadow-2xl">
//                             <img src="/imgs/cartera_huevos.jpg" alt="cartera huevos" className="w-full h-48 object-cover animate-slideUp" />
//                         </div>

//                         <div className="mt-4  p-4 rounded-lg">
//                             <p className="text-base md:text-lg font-inria font-semibold text-black leading-relaxed">
//                                 Cuando compras un cartón en Piquito no sólo llevas calidad: apoyas a una familia local que trabaja día a día.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Small gallery to fill gaps (three medium images) */}
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
//                     <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
//                         <img src="/imgs/maiz_grano.jpg" alt="maiz" className="w-full h-40 md:h-56 object-cover" />
//                     </div>
//                     <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
//                         <img src="/imgs/pasta_soya.jpg" alt="pasta de soya" className="w-full h-40 md:h-56 object-cover" />
//                     </div>
//                     <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
//                         <img src="/imgs/principal_image.jpg" alt="principal" className="w-full h-40 md:h-56 object-cover" />
//                     </div>
//                 </div>

//                 {/* Keep your vertical title exactly as-is (don't modify) */}
//                 <div className="flex flex-col items-center leading-none space-y-1 absolute -top-0.5 left-5 md:left-20">
//                     {(() => {
//                         const title = 'SOBRE NOSOTROS';
//                         return title.split('').map((ch, i) => {
//                             if (ch === ' ') {
//                                 return <span key={`sp-${i}`} className="block h-6 md:h-8" aria-hidden="true" />;
//                             }

//                             return (
//                                 <span
//                                     key={i}
//                                     tabIndex={0}
//                                     className="text-6xl font-inria text-black opacity-95 hover:text-amber-600  transition duration-200 transform hover:scale-110 cursor-pointer focus:outline-none"
//                                 >
//                                     {ch}
//                                 </span>
//                             );
//                         });
//                     })()}
//                 </div>

//                 {/* Lower wide paragraph (image-first design keeps text in second plane) */}
//                 <div className="mt-12 grid grid-cols-12 gap-6 items-start">

//                     <div className="col-span-12 md:col-span-9">
//                         <div className="relative rounded-2xl overflow-hidden group">
//                             <img
//                                 src="/imgs/gallina-cuidado.jpg"
//                                 alt="gallinas cuidadas"
//                                 className="w-full h-[520px] md:h-[640px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
//                             />

//                             {/* Inner overlay: gradient + inner shadow that fades in on hover to feel like a window */}
//                             <div
//                                 aria-hidden="true"
//                                 className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                                 style={{
//                                     background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.45) 100%)',
//                                     boxShadow: 'inset 0 24px 60px rgba(0,0,0,0.45)'
//                                 }}
//                             />

//                             {/* Subtle inner frame on hover */}
//                             <div
//                                 aria-hidden="true"
//                                 className="absolute inset-0 pointer-events-none rounded-2xl border  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                             />
//                         </div>
//                     </div>
//                     <div className="col-span-12 md:col-span-3">
//                         <p className="text-2xl md:text-3xl text-black font-inria font-semibold leading-relaxed" style={{textShadow: '0 6px 20px rgba(0,0,0,0.75)'}}>
//                             <span className="inline-block text-4xl md:text-6xl leading-none mr-3 align-top -translate-y-1 transform">C</span>
//                             ada gallina que cuidamos es parte de nuestro compromiso con dar un producto fresco, sano y con mucho corazón.
//                         </p>

//                         <p className="mt-4 text-lg md:text-xl text-black font-medium" style={{textShadow: '0 4px 14px rgba(0,0,0,0.6)'}}>
//                             <span className="inline-block text-3xl md:text-4xl leading-none mr-2 align-top -translate-y-0.5 transform">N</span>
//                             o solo vendemos huevo: <span className="text-amber-700 font-semibold">compartimos</span> el fruto de nuestro esfuerzo.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function SobreNosotros() {
    return (
        <section className="relative py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-12 gap-6 items-start">

                    {/* Left: Big image area */}
                    <div className="col-span-12 md:col-span-8">
                        <div className="grid grid-cols-12 gap-6">

                            <div className="col-span-12 md:col-span-8">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-700">
                                    <img
                                        src="/imgs/gallina_mira.jpg"
                                        alt="gallina mira"
                                        className="w-full h-[520px] md:h-[640px] object-cover animate-slideRight"
                                    />
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                                    <img
                                        src="/imgs/nina-acaricia_gallina.jpg"
                                        alt="niña con gallinas"
                                        className="w-full h-[520px] md:h-[640px] object-cover animate-slideRight"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="col-span-12 md:col-span-4 flex flex-col gap-6">

                        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm shadow-2xl shadow-amber-700">
                            <h2 className="font-inria text-3xl md:text-4xl font-bold mb-3 animate-typewriter">
                                ¿Por qué huevos?
                            </h2>
                            <p className="text-sm md:text-base text-black">
                                El huevo es parte de la canasta básica y en Piquito lo producimos con responsabilidad y cariño.
                                Nuestro objetivo es ofrecer producto fresco a precio justo y apoyar a las familias locales.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl flex items-center gap-4 bg-white/80 shadow-2xl shadow-amber-700">
                            <div className="text-3xl">🥚</div>
                            <div>
                                <p className="text-sm text-black font-medium">¿Ves? Todo esto se ocupa para generar un huevo</p>
                                <p className="text-xs text-black">Calidad, alimentación balanceada y cuidado diario.</p>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-2xl shadow-amber-700">
                            <img
                                src="/imgs/cartera_huevos.jpg"
                                alt="cartera huevos"
                                className="w-full h-48 object-cover animate-slideUp"
                            />
                        </div>

                        <div className="mt-4 p-4 rounded-lg">
                            <p className="text-base md:text-lg font-inria font-semibold text-black leading-relaxed">
                                Cuando compras un cartón en Piquito no sólo llevas calidad: apoyas a una familia local que
                                trabaja día a día.
                            </p>
                        </div>

                    </div>
                </div>

                {/* 3-image gallery */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                        <img src="/imgs/maiz_grano.jpg" className="w-full h-40 md:h-56 object-cover" />
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                        <img src="/imgs/pasta_soya.jpg" className="w-full h-40 md:h-56 object-cover" />
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-700">
                        <img src="/imgs/principal_image.jpg" className="w-full h-40 md:h-56 object-cover" />
                    </div>
                </div>

                {/* Title vertical repositioned ↓↓↓ */}
                <div className="flex flex-col items-center leading-none space-y-1 absolute top-20 left-5 md:left-20">
                    {(() => {
                        const title = 'SOBRE NOSOTROS';
                        return title.split('').map((ch, i) => {
                            if (ch === ' ') {
                                return <span key={`sp-${i}`} className="block h-6 md:h-8" aria-hidden="true" />;
                            }
                            return (
                                <span
                                    key={i}
                                    tabIndex={0}
                                    className="text-6xl font-inria text-black opacity-95 hover:text-amber-600 transition duration-200 transform hover:scale-110 cursor-pointer"
                                >
                                    {ch}
                                </span>
                            );
                        });
                    })()}
                </div>

                {/* Lower section */}
                <div className="mt-16 grid grid-cols-12 gap-6 items-start">

                    <div className="col-span-12 md:col-span-9">
                        <div className="relative rounded-2xl overflow-hidden group shadow-2xl shadow-amber-700">
                            <img
                                src="/imgs/gallina-cuidado.jpg"
                                alt="gallinas cuidadas"
                                className="w-full h-[520px] md:h-[640px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.45) 100%)',
                                    boxShadow: 'inset 0 24px 60px rgba(0,0,0,0.45)',
                                }}
                            />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <p className="text-2xl md:text-3xl text-black font-inria font-semibold leading-relaxed">
                            <span className="inline-block text-5xl md:text-6xl mr-2 align-top -translate-y-1">C</span>
                            ada gallina que cuidamos es parte de nuestro compromiso
                            con dar un producto fresco, sano y con mucho corazón.
                        </p>

                        <p className="mt-4 text-lg md:text-xl text-black font-medium">
                            <span className="inline-block text-4xl md:text-5xl mr-2 align-top -translate-y-1">N</span>
                            o solo vendemos huevo:{" "}
                            <span className="text-amber-700 font-bold">compartimos</span> el fruto de nuestro esfuerzo.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
