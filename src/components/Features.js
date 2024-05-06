import React, { useRef } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsFiles } from 'react-icons/bs';
import gsap from 'gsap';

const Card = ({ icon: Icon, text, iconColor }) => {
  const bgColorStyle = {
    backgroundColor: `${iconColor}`,
  };

  const heartRef = useRef(null);

  const handleHover = () => {
    gsap.to(heartRef.current, { scale: 1.2, duration: 0.2, repeat: 1, yoyo: true });
  };

  return (
    <div
      className="w-1/4 p-4 m-3 border bg-white border-gray-300 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleHover}
    >
      <div style={bgColorStyle} className="rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon size={25} color="black" />
        <div ref={heartRef} className="hidden absolute inset-0 flex items-center justify-center">
          <AiOutlineHeart size={25} color="#ff4d4f" />
        </div>
      </div>
      <p className="mt-20">{text}</p>
    </div>
  );
};

function Features() {
  return (
    <div className="text-black w-full p-5 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="col">
        <p className="text-slate-400">TAKING CARE OF EVERY CUSTOMER</p>
        <h1 className="font-bold">Key Features</h1>
        <p className="pt-2">
          Get your orders delivered within 3 hours. Explore trial options,
        </p>
        <p> buy only what you need. Enjoy hassle-free warranties, no complications.</p>
        <div className="flex pt-5">
          <Card icon={TbTruckDelivery} text="Instant 3 Hours Express Delivery" iconColor="#dfff0726" />
          <Card icon={AiOutlineHeart} text="Customer Satisfaction Guarantee" iconColor="#ff4d4f2b" />
          <Card icon={CgNotes} text="Experience Effortless Warranty Process" iconColor="#1987542b" />
          <Card icon={BsFiles} text="Order Multiple Items, Buy Only What You Want." iconColor="#c7d2fe75" />
        </div>
      </div>
    </div>
  );
}

export default Features;
