import FounderHeader from "@/components/FounderHeader"
import HistoryFounder from "@/components/HistoryFounder"
import InicioBar from "@/components/InicioBar"
import NavBar from "@/components/NavBar"
import Footer from "@/components/footer"

export default function FounderPage() {



    return (
        <div className="w-full">
            <InicioBar/>
            <NavBar/>  
            <FounderHeader />
            <HistoryFounder/>   
            <Footer/>   
        </div>
    )
}
