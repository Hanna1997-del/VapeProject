import clsx from "clsx";

interface SliderProps {
    
}
 
const Slider: React.FC<SliderProps> = () => {
    return ( 
        <div className={clsx(
            "w-full aspect-[1440/560] bg-blue-500"
        )}>
            <img
                src="/images/slider-sample.jpg"
                alt="slider-sample.jpg"
            />
        </div>
     );
}
 
export default Slider;