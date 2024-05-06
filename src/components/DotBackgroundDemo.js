import React from "react";
import AboutStart from "./AboutStart";
import BentoGridDemo from "./BentoGridDemo";

export function DotBackgroundDemo() {
  return (
    <div className="pb-3 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
   <AboutStart />
  <div className="block"> <BentoGridDemo /></div>
    </div>
  );
}
