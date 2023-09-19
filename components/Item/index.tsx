import { FaStar } from "react-icons/fa6";

interface ItemProps {
  percentage: number;
  name: string;
  price: string;
  points: number;
}

const Item: React.FC<ItemProps> = (item) => {
  return (
    <div className="w-full h-max mb-[2rem]">
      <div className="relative flex justify-center w-full aspect-square rounded-lg bg-[#EAEAEA] overflow-hidden">
        <img
          src="/images/vape-1.png"
          className="absolute top-0 left-0"
          alt="vape-1.png"
        />
        <div className="absolute px-[13px] py-[5px] bg-[#FF4545] text-white text-[12px] font-semibold">
          {item.percentage}% Off
        </div>
      </div>
      <h5 className="text-[15px] mt-[20px]">{item.name}</h5>
      <h6 className="text-[14px] font-bold">{item.price} MMK</h6>
      <h6 className="text-[10px] font-bold line-through">{item.price} MMK</h6>
      <div className="text-[#FCC100] flex justify-center items-center gap-1">
        <FaStar />
        <h6 className="text-[12px] font-bold mt-[0.1rem]">{item.points} Points</h6>
      </div>
    </div>
  );
};

export default Item;
