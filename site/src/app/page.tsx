import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
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
        <PorQue />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
