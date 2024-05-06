"use client";
import { useEffect } from 'react';
import React from 'react';
import Lenis from "@studio-freight/lenis";
import Preloader from '../components/Preloader'
import Menu from '@/components/Menu';
import BackgroundBeams from '@/components/BackgroundBeams'; // Import the BackgroundBeams component
import { DotBackgroundDemo } from '@/components/DotBackgroundDemo';
import Features from '@/components/Features';
import { CardStackDemo } from '@/components/CardStackDemo';
import MarqueeDemo from '@/components/MarqueeDemo';
import DownloadBadge from '@/components/DownloadBadge';

function Index() { // Changed function name to start with uppercase
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <div>  
      <Preloader />
      <Menu />
      <BackgroundBeams />
      <DotBackgroundDemo />
      <Features />
      <MarqueeDemo />
      <CardStackDemo />
      <DownloadBadge />
    </div>    
  )
}

export default Index;
