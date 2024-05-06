import { CardStack } from "./CardStack";
import { cn } from "@/utils/cn";

export function CardStackDemo() {
  return (
<div className=" pt-5 p-4 items-center justify-center  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full">
     <div className="text-center"><h1 className="text-black p-5 pb-6 font-bold">Customer Testimonial</h1></div>
     
      <div className="flex justify-between w-full">
        <div className="w-1/2 p-4">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-2xl text-black font-bold ">See Why Customers Love VINKAL</h1>
            <p className=" text-black">
Welcome to VINKAL – your local market, now online! Get your orders delivered within 3 hours. Explore trial options, buy only what you need. Enjoy hassle-free warranties, no complications.
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
