import clsx from "clsx";

interface SliderItemProps {
  index: number;
  slide: any;
  selected: number;
}
const transition_style = "transition-all duration-500 ease-out";

const SliderItem: React.FC<SliderItemProps> = ({ index, slide, selected }) => {
  return (
    <div className={clsx(
      "absolute top-0 left-0",
      "w-full aspect-[1440/560]",
      transition_style,
      index == selected ? "opacity-100" : "opacity-0"
    )}>
      <div className="w-full h-full relative">
        {/* eslint-disable-next-line */}
        <img
          className={clsx(
            "absolute top-0 left-0 z-1",
          )}
          src={slide.image}
          alt="slider-sample.jpg"
        />
        <div className={clsx(
          "absolute top-0 left-0 z-2 bg-gradient-to-b from-transparent to-black/50",
          "flex flex-col items-center justify-end w-full h-full text-white md:gap-[5px]"
        )}>
            <h5 className="text-[5px] md:text-[25px]">{slide.subtitle}</h5>
            <h1 className="text-[17px] md:text-[50px] font-bold">{slide.title}</h1>
            <p className="text-[10px] md:text-[20px]">{slide.intro}</p>
            <button className={clsx(
              "w-[50px] md:w-[75px] h-[25px] md:h-[40px] bg-black/40 rounded-full",
              "text-[10px] mb-[17px] md:mb-[45px]",
              "mt-[3px] md:mt-[10px] "
            )}>
              View
            </button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
