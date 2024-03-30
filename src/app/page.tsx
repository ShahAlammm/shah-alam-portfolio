

import Hero from "@/components/sections/Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 xl:left-80 md:-top-20 xl:-top-40"
        fill="white"
      />
      <div className="w-full flex md:items-center md:justify-center antialiased relative overflow-hidden z-40">

        <TracingBeam className="px-6">

            <Hero />

        </TracingBeam>
      </div>



    </>
  );
}
