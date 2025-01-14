import Header from "../Components/Header";
import Form from '../Components/Form'
import Footer from "../Components/Footer";
import '../index.css'
import Konsutatsioonid from "../Components/Konsultatsioon";

function Teenus4() {
    return (
        <div>
            <Header/>
            <Konsutatsioonid/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Teenus4;