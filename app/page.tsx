import Carousel from "@/components/carrusel";
import ExtraMain from "@/components/ExtraMain";
import Footer from "@/components/footer";
import InicioBar from "@/components/InicioBar";
import MainHome from "@/components/MainHome";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className=" h-full  w-full text-white">
      <InicioBar/>
      <NavBar/>
      <Carousel/>
      <MainHome/>
      <ExtraMain/>
      <Footer/>

    </div>
  );
}
