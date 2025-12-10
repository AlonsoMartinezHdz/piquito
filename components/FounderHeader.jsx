export default function FounderHeader() {
    return (
        <header className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">

            {/* IMAGEN */}
            <img  
                src="/imgs/pedro-tractor.jpg" 
                className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* TEXTO */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold animate-typewriter leading-tight">
                    La historia del fundador
                </h1>

                <p className="text-white/90 mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl max-w-xl md:max-w-3xl leading-relaxed">
                    Una vida entre la tierra, el esfuerzo y la tecnología
                </p>
            </div>

        </header>
    );
}

