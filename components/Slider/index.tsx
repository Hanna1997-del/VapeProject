"use client";

import clsx from "clsx";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface SliderProps {}

const slide_style = "absolute top-0 left-0";
const transition_style = "transition-all duration-500 ease-out";
const button_style = "w-[45px] h-[167px] aspect-[45/167] bg-black/70 rounded-lg border-2 border-slate-900 text-white flex justify-center items-center"

const slides = [
  {
    image: "/images/slider-sample.jpg",
  },
  {
    image: "/images/slider-sample-2.jpg",
  },
  {
    image: "/images/slider-sample-3.jpg",
  },
];

const Slider: React.FC<SliderProps> = () => {
  const [selected, setSelected] = useState(0);
  const onNext = () => {
    const nextValue = selected < 2 ? selected + 1 : 0;
    setSelected(nextValue)
  }
  const onPrev = () => {
    const prevValue = selected > 0 ? selected - 1 : 2;
    setSelected(prevValue)
  }
  return (
    <div className={clsx("relative w-full aspect-[1440/560] bg-blue-500")}>
      {slides.map((slide, index) => (
        // eslint-disable-next-line
        <img
          className={clsx(
            slide_style, 
            transition_style,
            index == selected ? "opacity-100" : "opacity-0"
          )}
          src={slide.image}
          alt="slider-sample.jpg"
          key={index}
        />
      ))}
      <div className="absolute flex justify-between items-center top-0 left-0 w-full h-full px-[2rem]">
            <button className={button_style} onClick={onPrev}>
                <AiOutlineArrowLeft/>
            </button>
            <button className={button_style} onClick={onNext}>
                <AiOutlineArrowRight/>
            </button>
      </div>
    </div>
  );
};

export default Slider;
