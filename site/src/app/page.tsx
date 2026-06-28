import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Herramientas from "@/components/Herramientas";
import PorQue from "@/components/PorQue";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Herramientas />
        <PorQue />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
