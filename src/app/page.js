'use client'
import Navbar from "@/components/custom/navbar";
import Hero from "@/components/custom/hero";
import Gameselection from "@/components/custom/gameselection";
import Gamequery from "@/components/custom/gamequery";
import Footer from "@/components/custom/footer";
import { useSelector } from "react-redux";
export default function Home() {
  const {language} = useSelector((state) => state.lan);
  console.log(language)
  return (
    <>
      <Navbar />
      <Hero />
      <Gameselection />
      <Gamequery />
      <Footer />
    </>
  );
}
