"use client";

import clsx from "clsx";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SliderItem from "../SliderItem";
import Navbar from "../Navbar";
import SliderButton from "../SliderButton";

interface SliderProps {}



const slides = [
  {
    image: "/images/slider-sample.jpg",
    subtitle: "The Best Look",
    title: "Anytime Anywhere",
    intro: "Start from 10,000 MMK",
  },
  {
    image: "/images/slider-sample-2.jpg",
    subtitle: "With Style",
    title: "Get Fun",
    intro: "Start from 10,000 MMK",
  },
  {
    image: "/images/slider-sample-3.jpg",
    subtitle: "Enjoy Life To The Fullest",
    title: "Make It Cool",
    intro: "Start from 10,000 MMK",
  },
];

const Slider: React.FC<SliderProps> = () => {
  const [selected, setSelected] = useState(0);
  const onNext = () => {
    const nextValue = selected < 2 ? selected + 1 : 0;
    setSelected(nextValue);
  };
  const onPrev = () => {
    const prevValue = selected > 0 ? selected - 1 : 2;
    setSelected(prevValue);
  };
  return (
    <div className={clsx("relative w-full aspect-[1440/650] md:aspect-[1440/585]")}>
      <Navbar/>
      {slides.map((slide, index) => (
        <SliderItem
          slide={slide}
          index={index}
          selected={selected}
          key={index}
        />
      ))}
      <SliderButton onPrev={onPrev} onNext={onNext}/>
      <div className="absolute w-full flex justify-center bottom-0 gap-3">
          {
            slides.map((item,index) => (
              <div className={clsx(
                "w-[10px] h-[10px] rounded-full",
                index == selected ? "bg-black" : "bg-gray-300"
              )} key={index}></div>
            ))
          }
      </div>
    </div>
  );
};

export default Slider;
