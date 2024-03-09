import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import ExprienceSection from "./components/ExprienceSection";
import AboutSection from "./components/AboutSection";
import HighlightSection from "./components/HighlightSection";
import FooterSection from "./components/FooterSection";

import ScrollToTopButton from "./components/ScrollToTopButton";



export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col relative">
      <NavBar/>
      <section className="mx-auto py-4 px-4 md:px-0 overflow-x-hidden">
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <EducationSection/>
        <ExprienceSection/>
        <HighlightSection/>
        <FooterSection/>

      </section>
      <ScrollToTopButton />
    </main>
  );
}
