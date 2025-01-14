import Header from "../Components/Header";
import Hero from "../Components/Hero"
import Product from "../Components/Product"
import Introduction from "../Components/Introduction"
import Form from '../Components/Form'
import Footer from "../Components/Footer";
import Hinnakiri from "../Components/Hinnakiri";
import '../index.css'

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Product />
            <Hinnakiri/>
            <Introduction />
            <Form />
            <Footer />
        </div>
    )
}