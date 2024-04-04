
import Project from "@/components/elements/ProjectCard/Project";
import Timeline from "@/components/sections/Timeline";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import { Testimonial } from "@/components/sections/Testimonial";
import { Spotlight } from "@/components/ui/Spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 xl:left-80 md:-top-20 xl:-top-40"
        fill="white"
      />
      <div className="flex md:items-center md:justify-center antialiased relative overflow-hidden  ">
        <TracingBeam className="px-6 z-50">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Project />
          <Timeline/>
          <Testimonial />
          <Contact />
          <Footer />
        </TracingBeam>
      </div>



    </>
  );
}
