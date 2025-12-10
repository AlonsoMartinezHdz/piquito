import AnimatedBlock from "./AnimatedBlock";

export default function HistoryFounder() {
  return (
    <div className="w-full text-black px-4 sm:px-6 md:px-16 lg:px-28 py-12 bg-faint-image">

      {/* HEADER */}
      <header className="text-center mb-16 sm:mb-20">
        <p className="text-4xl sm:text-5xl md:text-7xl text-amber-700 font-inria opacity-80 leading-tight">
          Pedro Alonso Martínez Hernández
        </p>

        <p className="text-lg sm:text-xl md:text-2xl mt-4 opacity-80 leading-relaxed">
          Fundador de Piquito | Entre la tierra y la tecnología
        </p>
      </header>

      {/* BLOQUE 1 */}
      <AnimatedBlock image="/imgs/Pedro-full.jpg">
        Soy hijo de un militar y una exempleada bancaria, ambos originarios de Jerez, Zacatecas — San Nicolás y Monte Escobedo. 
        Crecí entre dos mundos: la ciudad y el rancho. Me crie en Guadalajara, pero en cada vacación regresaba al campo, 
        entre caballos, vacas, cerros y tierras sembradas. <br />
        Desde niño entendí que mis raíces estaban en la tierra, aunque mi vida creciera en la ciudad.
        Siempre tuve el impulso de generar algo propio. A los 13 compraba y vendía cosas aprovechando el enorme mercado de Guadalajara. 
        Más adelante trabajé como mesero. Ahí comprendí el valor del esfuerzo, el servicio y el trato con la gente.
      </AnimatedBlock>

      {/* BLOQUE 2 */}
      <AnimatedBlock image="/imgs/Pedro-caballo.jpg" reverse>
        Al mudarnos nuevamente a Jerez, terminé la preparatoria y estudié Comercio Internacional en la Universidad de Zacatecas. 
        Pero la pandemia lo cambió todo. Con clases en línea, encierro y el sueño frustrado de trabajar en Estados Unidos, sentí que mi juventud 
        pasaba sin aprender del mundo.
      </AnimatedBlock>

      {/* BLOQUE 3 */}
      <AnimatedBlock image="/imgs/pedro-dublin.jpg">
        Vendí mi moto para adentrarme en inversiones y criptomonedas. Aprendí, perdí, gané, me desvelé… pero desarrollé disciplina y una terquedad 
        que me ha llevado hasta aquí.
        Gracias a lo que pude generar, cumplí otro sueño: aprender inglés.
        Y la mejor forma que encontré fue acorralarme a mí mismo en un lugar donde no pudiera escapar del idioma. 
        Así llegué a Dublín, Irlanda. Sin conocer a nadie, sin amigos ni familia, solo yo y mi determinación por aprender.
      </AnimatedBlock>

      {/* BLOQUE 4 */}
      <AnimatedBlock image="/imgs/pedro-chef.jpg" reverse>
        Viví dos años allá. Empecé como lavaplatos, terminé como chef encargado en mi respectiva sección. <br />
        Me ofrecieron una visa para quedarme más tiempo, pero mi corazón estaba en México. <br />
        No quería construir una vida lejos de mis raíces.
        Mis padres ya comenzaban a cansarse, y no quería que el rancho, la tierra y la historia de mi familia se perdieran. <br />
        Para mí, el rancho no es un negocio: es herencia emocional. <br/>
        Había algo en México que me llamaba más fuerte: <br/>
        Mi amor por la tierra y el deseo de construir lo mío. <br />
        Pensé en varios negocios —tilapias, ganado, agricultura—, pero el camino me llevó a una decisión más clara: 
        una granja de gallinas ponedoras.
      </AnimatedBlock>

      {/* BLOQUE 5 */}
      <AnimatedBlock image="/imgs/pedro-henry.jpg">
        Pero tengo otro gusto enorme: la tecnología. <br /> 
        Me enamoré del desarrollo web, del código y de construir herramientas digitales.
        Así que tomé otro riesgo: me inscribí en un bootcamp de desarrollo web. <br />
        Hubo días en los que pensé que esto no era para mí. <br />
        Por más que estudiaba, sentía que no lograba avanzar al ritmo que quería.
        Pero si algo tengo claro es que no nací para rendirme, aunque me tarde más que otros.  <br/> <br />
        Me costó dinero —y sí dolió 😅—, pero era una forma de obligarme a cumplirlo. <br/>
        Este sitio, por ejemplo, lo diseñé yo mismo. Me tardé, sí: entre ser un adulto responsable, lavar, comida, trabajo 
        y mil percances… pero como ya dije, soy terco y termino todo lo que empiezo.
      </AnimatedBlock>

      {/* BLOQUE 6 */}
      <AnimatedBlock image="/imgs/piquito-granja-fuera.jpg" reverse>
        Por eso nació Piquito. <br/>   
        Un proyecto que une mis dos mundos: <br/>
        👉 La vida del campo y el amor por la tierra. <br />
        👉 La tecnología y mi deseo de crear algo propio. <br /> <br />
        Pero más allá de eso, sueño con honrar mis raíces, levantar la mirada del campo y demostrar que en Zacatecas también se pueden construir cosas grandes. <br /> <br />
        Sueño —por qué no decirlo— con ser el próximo Huevo San Juan, pero con corazón zacatecano. 
        Sueño con crecer, crear empleo, impulsar el campo y llevar el sabor fresco de Jerez a cada mesa. <br /><br />
        Soy una persona común, como cualquiera, solo que con la convicción de no quitar el dedo del renglón.
        Piquito es prueba de eso.
      </AnimatedBlock>

      {/* FOOTER */}
      <footer className="text-center mt-20 text-lg sm:text-xl font-inria opacity-80">
        Y esta historia apenas comienza…
      </footer>

    </div>
  );
}
