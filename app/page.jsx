import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden p-10 bg-primary">
        <Navbar/>
        <Hero/>
        <HeroCarousel/>
        <Footer/>
    </div>
  );
}
