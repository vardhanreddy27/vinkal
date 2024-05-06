import { useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.black-screen', {
      duration: 1, // Duration of the animation
      height: 0, // Final height of the black screen
      ease: 'power2.inOut', // Easing function
    });
  }, []);

  return (
    <div className="black-screen" style={{ backgroundColor: 'white', width: '100%', height: '100vh', position: 'relative' }} />
  );
};

export default Preloader;
