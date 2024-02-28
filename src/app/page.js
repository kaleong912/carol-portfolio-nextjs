import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import ExprienceSection from "./components/ExprienceSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar/>
      <div className="mx-auto py-4 px-4 md:px-0">
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <EducationSection/>
        <ExprienceSection/>

      </div>
      
    </main>
  );
}
