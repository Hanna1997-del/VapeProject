import clsx from "clsx";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full flex justify-between items-center z-[50]",
        "text-white px-[2.5rem] py-[0.3rem] md:py-[1.5rem] bg-gradient-to-b from-black/30 to-black/0"
      )}
    >
      <div className="flex gap-1 md:gap-3 items-center text-sm md:text-2xl drop-shadow-lg">
        <DiCodeigniter />{" "}
        <h3 className="font-bold text-[0.3rem] mt-[0.2rem] md:mt-0 md:text-[1.5rem]">Hnin Thet Hmue</h3>
      </div>
      <div className="flex gap-[10px] md:gap-[25px] text-xs md:text-2xl">
        <div>
          <AiOutlineSearch />
        </div>
        <div>
          <AiOutlineShoppingCart />
        </div>
        <div>
          <BiMenuAltLeft />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
