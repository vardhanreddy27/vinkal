import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

function Menu() {

  useEffect(() => {
    // Initialize SplitType for the 'VINKAL' text
    const text = new SplitType('#title');
    const aboutText = new SplitType('#about');
    const servicesText = new SplitType('#services');
    const contactText = new SplitType('#contact');

    // Define GSAP animation for the revealed text
    gsap.fromTo(
      [text.words, aboutText.words, servicesText.words, contactText.words], // Select all characters of the text
      { opacity: 0, y: '50px' }, // Initial state: invisible and positioned below
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out', stagger: 0.01 } // Target state: fully visible and in original position
    );

    // Define GSAP animation for the buttons
    gsap.fromTo(
      'button', // Select all buttons
      { opacity: 0, y: '50px' }, // Initial state: invisible and positioned below
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out', stagger: 0.01 } // Target state: fully visible and in original position
    );
  }, []);

  return (
    <div className="m-4 flex justify-between items-center">
      <div>
        {/* Use the same ID 'title' for the SplitType */}
        <h2 id="title" className='font-bold animate-text logo'>VINKAL</h2>
      </div>
      <div className="ml-24 flex justify-center items-center h-full">
        <a href="#" id='about' className="pl-6 text-slate-200 pr-6 animate-text">About</a>
        <a href="#" id='services' className="pl-6 pr-6 text-slate-200 animate-text">Services</a>
        <a href="#" id="contact" className="pl-6 pr-6 text-slate-200 animate-text">Contact</a>
      </div>
      <div className='animate-text'>
        {/* Apply GSAP animation to both buttons */}
        <button className="text-sm bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ">Login</button>
        <button className="text-sm bg-slate-50 hover:bg-slate-100 text-black font-bold py-2 px-4 rounded z-100 ml-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Menu;
