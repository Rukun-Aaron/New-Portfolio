import Image from "next/image";
import { Hero } from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import ProjectsSection from "@/components/main/ProjectsSection";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        
        <Hero />
        <Skills/>
        <Encryption />
        {/* <ProjectsSection/> */}
        <Projects/>
        <Footer/>
        
        
      </div>
    </main>
  );
}