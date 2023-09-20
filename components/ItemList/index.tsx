"use client";

import { useEffect, useState } from "react";
import Item from "../Item";
import { BiChevronRight } from "react-icons/bi";
import clsx from "clsx";

interface ItemListProps {}

const itemlist_data = [
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    percentage: 20,
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
];

const ItemList: React.FC<ItemListProps> = () => {
  const [width, setWidth] = useState(0);
  const isMobile = width < 400;

  const getItemList = () => {
    const data = [...itemlist_data];
    if(isMobile){
      return data.splice(0,2);
    }
    return data;
  }

  useEffect(() => {
    if(window.innerWidth){
      setWidth(window.innerWidth)
    }
  },[])
  return (
    <div className="w-full md:w-[1110px] mt-[1rem] md:mt-[3rem] text-center mb-[5rem]">
      <h3 className="font-bold text-[45px]">Best Deals</h3>
      <p className="text-[20px] mb-[30px]">Just For You</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-[6px] px-5">
        {
            getItemList().map(item => (
                <Item {...item} key={item.name} />
            ))
        }
        
      </div>
      <div className="w-full flex justify-center">
        <button className={clsx(
          "flex gap-1 text-md bg-gray-200 text-black/75 items-center rounded-full",
          "px-[5rem] py-[0.5rem]"
        )}>
          View More
          <BiChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default ItemList;
