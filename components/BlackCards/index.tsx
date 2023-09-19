import { IoDiamond } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";

interface BlackCardProps {}

const BlackCard: React.FC<BlackCardProps> = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[1110px] justify-between mb-[5rem] px-5 gap-[1rem] md:gap-0">
      <div className="relative w-full md:w-[59%] aspect-[662/357] bg-[#2D2D2D] rounded-lg overflow-hidden">
        <img
          src="/images/black-card-sample-1.png"
          className="absolute top-0 left-0 z-1"
          alt="black-card sample"
        />
        <div className="absolute flex flex-col top-0 left-0 z-2 p-[25px] md:p-[50px] gap-[7px] md:gap-[20px]">
          <div className="flex gap-[20px]">
            <div className="text-[1.7rem] md:text-[3.5rem] text-blue-500">
                <IoDiamond />
            </div>
            <div className="text-[1.7rem] md:text-[3.5rem] text-yellow-500">
                <GiTwoCoins />
            </div>
            <div className="text-[1.7rem] md:text-[3.5rem] text-slate-300">
                <BsCoin />
            </div>
          </div>
          <h5 className="text-[20px] md:text-[35px] font-bold text-slate-200">Membership Program</h5>
          <p className="text-[10px] md:text-[16px] w-[70%] text-slate-200">Be a Vape Pi member and get our special exclusive offers</p>
          <div>
            <button className="rounded-full px-[20px] py-[7px] text-white bg-black/50 border border-gray-400 text-[10px] md:text-[15px]">View</button>
          </div>
          
        </div>
      </div>
      <div className="w-[40%] aspect-[662/257] bg-[#2D2D2D] rounded-lg"></div>
    </div>
  );
};

export default BlackCard;
