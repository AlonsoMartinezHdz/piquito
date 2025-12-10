export default function InicioBar() {
  return (
    <div
      className="
        font-inria bg-white text-black font-bold
        flex items-center justify-center text-center
        px-3 py-1
        text-xs sm:text-sm md:text-base
        hover:bg-amber-600 hover:text-white
        cursor-pointer
        transition-all duration-300 ease-in-out
        select-none
      "
    >
      🚚 <span className="hidden xs:inline"> Envío gratis ➕</span> felicidad garantizada 🎯
    </div>
  );
}
