"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xwpjlbvq");

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center mt-20 animate-fadeIn px-4 text-center">
        {/* círculo verde */}
        <div className="bg-amber-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center animate-bounce">
          {/* check */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-14 sm:w-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mt-6 font-inria">
          ¡Mensaje enviado!
        </h2>

        <p className="text-base sm:text-lg text-black mt-2 font-inria">
          Gracias por contactarnos. Te responderemos pronto 😊
        </p>
      </div>
    );
  }

  return (
    <div className="
      grid grid-cols-1 md:grid-cols-2 
      place-items-center 
      p-6 sm:p-9 
      gap-12 md:gap-0
    ">
      
      {/* COLUMNA IZQUIERDA */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:w-96 flex justify-center">

        <img 
          src="/imgs/huevo_roto.jpg" 
          alt="huevo-roto" 
          className="rounded-4xl w-full h-auto"
        />

        {/* Texto principal */}
        <span className="
          absolute 
          top-6 sm:top-14 md:top-18
          left-4 sm:left-10 md:left-12
          right-4
          text-black font-bold 
          text-lg sm:text-xl md:text-2xl 
          font-inria text-center drop-shadow-xl
        ">
          Informacion de contacto <br /> gracias por escoger <br /> 
          <span className="text-[#C45206]">PIQUITO</span>
        </span>

        {/* Subtexto */}
        <span className="
          absolute 
          bottom-2 sm:bottom-4 md:top-130 
          left-2 sm:left-4 md:left-4
          right-2 
          text-black text-xs sm:text-sm md:text-sm
          font-inria text-center drop-shadow-xl
        ">
          Intentaremos resolver su inconveniente lo antes posible
        </span>

        {/* Título superior */}
        <span className="
          absolute 
          -top-6 sm:-top-8 md:-top-5
          right-1 sm:-right-10 md:-right-160
          text-[#C45206] font-bold
          text-3xl sm:text-4xl md:text-5xl
          font-inria drop-shadow-xl
          text-center
          whitespace-nowrap
        ">
          Quejas o sugerencias
        </span>

      </div>

      {/* FORMULARIO */}
      <form 
        onSubmit={handleSubmit} 
        className="
          w-full max-w-md 
          bg-amber-600 p-5 sm:p-6 
          rounded-2xl shadow-lg 
          flex flex-col gap-4
        "
      >
        
        {/* Nombre */}
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre aquí" 
          className="px-4 py-3 rounded-xl outline-none bg-white/90 placeholder-gray-500 text-black"
        />

        {/* Apellido */}
        <input 
          type="text" 
          name="apellido" 
          placeholder="Apellidos" 
          className="px-4 py-3 rounded-xl outline-none bg-white/90 placeholder-gray-500 text-black"
        />

        {/* Telefono */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/90 px-4 py-3 rounded-xl">☎️</div>
          <input 
            type="number" 
            name="numero" 
            placeholder="+52" 
            className="flex-1 px-4 py-3 rounded-xl outline-none bg-white/90 placeholder-gray-500 text-black"
          />
        </div>

        {/* Correo */}
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Correo" 
            className="w-full px-4 py-3 rounded-xl outline-none bg-white/90 placeholder-gray-500 text-black"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Mensaje */}
        <div>
          <textarea 
            name="message" 
            placeholder="Mensaje" 
            className="w-full h-32 px-4 py-3 rounded-xl outline-none bg-white/90 placeholder-gray-500 text-black resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={state.submitting}
          className="
            w-full py-3 rounded-xl text-white text-lg 
            bg-amber-900 hover:bg-amber-700
            shadow-md hover:shadow-xl 
            transition-all duration-300 
            active:scale-95 disabled:opacity-70
          "
        >
          Enviar Mensaje
        </button>

      </form>

    </div>
  );
}

