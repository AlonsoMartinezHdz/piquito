

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-amber-600 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* TOP BAR: LOGO + SLOGAN + MOBILE BUTTON */}
        <div className="flex flex-col items-center justify-center w-full border-b border-white/50 pb-2 md:flex-row md:justify-between">

          {/* LOGO/TÍTULO */}
          <div className="font-inria text-white text-3xl cursor-pointer animate-slideIn" onClick={() => router.push("/")}>
            PIQUITO
          </div>

          {/* SLOGAN — visible en desktop */}
          <p className="hidden md:block font-inria text-white/90 text-sm">
            “Con un piquito de campo, mucho sabor en tu mesa”
          </p>

          {/* BOTÓN MOBILE */}
          <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>☰</button>
        </div>

        {/* LOGO CENTRAL */}
        <div className="flex justify-center mt-2">
          <img src="/imgs/Piquitoo-Egg-logo.png" alt="logo" className="w-32 animate-rotate" />
        </div>

        {/* LINKS */}
        <ul className={`font-inria text-lg text-white flex flex-col items-center gap-6 mt-6 md:flex-row md:justify-center md:gap-10 md:mt-4 transition-all duration-500
            ${open ? "block" : "hidden md:flex"} `} >
          {[
            { label: "Inicio", link: "/" },
            { label: "Productos", link: "/nuestro_huevo" },
            { label: "Nosotros", link: "/sobre_nosotros" },
            { label: "Contacto", link: "/contacto" },
            { label: "Creador", link: "/funder" },
          ].map((item, i) => (
            <li key={i} onClick={() => { router.push(item.link); setOpen(false);}}className="cursor-pointer relative group pb-1 hover:text-white">
              {item.label}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white group-hover:w-full  transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
