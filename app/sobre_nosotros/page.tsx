import Footer from "@/components/footer";
import InicioBar from "@/components/InicioBar";
import NavBar from "@/components/NavBar";
import SobreNosotros from "@/components/SobreNosotros";

export default function sobreNosotros (){
    return(
        <div className=" w-full text-black">
            <InicioBar/>
            <NavBar/>
            <SobreNosotros/>
            <Footer/>
        </div>
    )
}