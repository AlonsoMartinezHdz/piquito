import Footer from "@/components/footer";
import InicioBar from "@/components/InicioBar";
import NavBar from "@/components/NavBar";
import Nuestrohuevo from "@/components/Nuestrohuevo";

export default function nuestrohuevo (){
    return(
        <div className=" min-h-screen  w-full m-0 p-0 overflow-x-hidden">
            <InicioBar/>
            <NavBar/>
            <Nuestrohuevo/>
            <Footer/>
        </div>
    )
}