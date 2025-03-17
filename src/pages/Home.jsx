import Navbar from "../components/Navbar";
import Servicios from "../components/Servicios";
import Promociones from "../components/Promociones";
import Carrusel from "../components/Carrusel";
import Botton from "../components/Botton";
import Footer from "../components/Footer";
function Home() {
    return (
        <> 
            <header>
            <Navbar />
            </header>
            <main>
                <section id="inicio">
                    <h1><em>Lavadero y Gomeria 231</em></h1>
                    <p className="parIni">Servicios Car-Details y Gomeria</p>
                </section>
                <section id="servicios">
                    <Servicios />
                </section>
                <section id="promociones">
                    <Promociones />
                </section>
                <section id="galeria">
                    <Carrusel />
                </section>
            </main>
            <Botton />
            <Footer></Footer>
        </>
    );
}

export default Home;