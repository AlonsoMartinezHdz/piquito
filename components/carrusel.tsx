"use client"
import { useState, useEffect } from "react"
const images =["/imgs/third_image.jpg","/imgs/five_image.jpg","/imgs/six_image.jpg"]

export default function Carousel (){
    
    const [index,setindex]= useState(0)

    const prevSlide = ()=>{setindex((old)=> (old === 0? images.length -1 :old-1)) }
    const nextSlide =()=>{setindex((old)=> (old === images.length -1? 0: old +1))}

    useEffect(() => {
        const id = setInterval(() => {
            setindex((old) => (old === images.length - 1 ? 0 : old + 1));
        }, 14000);
        return () => clearInterval(id);
    }, []);

    return(
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] mx-auto overflow-hidden 
                        shadow-2xl shadow-amber-700">

            {/* IMAGENES */}
            <div className="absolute inset-0">
                {images.map((src, i) => (
                    <img 
                        key={src} 
                        src={src} 
                        alt="carousel" 
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            opacity: index === i ? 1 : 0,
                            transition: "opacity 700ms ease, filter 700ms ease",
                            filter: index === i ? "blur(0px)" : "blur(6px)",
                            transform: "translateZ(0)",
                        }}
                        aria-hidden={index !== i}
                    />
                ))}
            </div>

            {/* TEXTO */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="font-inria font-bold text-4xl sm:text-5xl md:text-7xl text-[#C45206]
                               transition-transform duration-300 ease-in-out hover:scale-110">
                    PIQUITO
                </h1>

                <h2 className="text-base sm:text-lg md:text-xl font-inria mt-2 text-white drop-shadow">
                    Con un <span className="text-[#C45206] font-inria font-bold">piquito</span> de campo, mucho sabor en tu mesa
                </h2>
            </div>

            {/* BOTONES */}
            <button 
                onClick={prevSlide} 
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/40 text-white p-2 sm:p-3 
                           rounded-full font-extrabold hover:bg-white/60"
            >
                ❮
            </button>

            <button 
                onClick={nextSlide} 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/40 text-white p-2 sm:p-3
                           rounded-full font-extrabold hover:bg-white/60"
            >
                ❯
            </button>
        </div>
    )
}
