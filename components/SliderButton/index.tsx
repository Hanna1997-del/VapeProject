import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface SliderButtonProps {
    onPrev: any;
    onNext: any;
}

const button_style =
  "w-[30px] md:w-[45px] h-full md:h-[167px] md:aspect-[45/167] bg-black/70 md:rounded-lg md:border-2 border-slate-900 text-white flex justify-center items-center";

const SliderButton: React.FC<SliderButtonProps> = ({onPrev, onNext}) => {
  return (
    <div className="absolute aspect-[1440/560] flex justify-between items-center top-0 left-0 w-full md:h-full md:px-[2rem] z-50">
      <button className={button_style} onClick={onPrev}>
        <AiOutlineArrowLeft />
      </button>
      <button className={button_style} onClick={onNext}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default SliderButton;
