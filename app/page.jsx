import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden mf:p-10 px-3 py-4 bg-primary">
        {/* <Navbar/> */}
        <Hero/>
        <Card/>
        <HeroCarousel/>
        {/* <Footer/> */}
    </div>
  );
}
