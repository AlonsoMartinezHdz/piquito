import Contacto from "@/components/Contacto";
import Footer from "@/components/footer";
import InicioBar from "@/components/InicioBar";
import NavBar from "@/components/NavBar";

export default function contacto (){
    return(
        <div className=" h-screen w-full text-black">
            <InicioBar/>
            <NavBar/>
            <Contacto/>
            <Footer/>
        </div>
    )
}