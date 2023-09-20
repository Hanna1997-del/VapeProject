"use client";

import { IoDiamond } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { useRef } from "react";

interface BlackCardProps {}

const BlackCard: React.FC<BlackCardProps> = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-max md:w-[1110px] justify-between mb-[5rem] px-5 gap-[1rem] md:gap-0">
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
          <h5 className="text-[20px] md:text-[35px] font-bold text-slate-200">
            Membership Program
          </h5>
          <p className="text-[10px] md:text-[16px] w-[70%] text-slate-200">
            Be a Vape Pi member and get our special exclusive offers
          </p>
          <div>
            <button className="rounded-full px-[20px] py-[7px] text-white bg-black/50 border border-gray-400 text-[10px] md:text-[15px]">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-between aspect-[428x340]">
        <div className="relative w-[49%] h-[100%] bg-[#2D2D2D] rounded-lg aspect-[210/340]">
          <img
            src="/images/black-card-sample-2.png"
            className="absolute top-0 left-0 z-1"
            alt="black-card sample"
          />
          <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-end p-[20px]">
            <h3 className="text-lg font-bold mb-1">Devices 
            {/* {longRef.current?.clientWidth} x {longRef.current?.clientHeight} */}
            </h3>
            <p className="text-sm">Find the best for you here</p>
          </div>
        </div>
        <div className="w-[49%] h-[100%] flex flex-col justify-between aspect-[210/340]">
          <div className="w-full relative h-[48%] bg-[#2D2D2D] rounded-lg aspect-[210/163]">
            <img
              src="/images/black-card-sample-3.png"
              className="absolute top-0 left-0 z-1"
              alt="black-card sample"
            />
            <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-end p-[15px]">
              <h3 className="text-[1rem] font-bold mb-[0.1rem]">Pods</h3>
              <p className="text-[0.7rem]">Variety of choices available</p>
            </div>
          </div>
          <div className="w-full relative h-[48%] bg-[#2D2D2D] rounded-lg  aspect-[210/163]">
            <img
              src="/images/black-card-sample-4.png"
              className="absolute top-0 left-0 z-1"
              alt="black-card sample"
            />
            <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-end p-[15px]">
              <h3 className="text-[1rem] font-bold mb-[0.1rem]">Disposable</h3>
              <p className="text-[0.7rem]">Easy,clean & superb flavor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackCard;
