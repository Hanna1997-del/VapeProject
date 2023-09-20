import clsx from "clsx";
import Item from "./Item";

interface DesktopOnlyProps {}

const itemlist_data = [
  {
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
  {
    name: "Refreshing Mint",
    price: "30,000",
    points: 600,
  },
];

const DesktopOnly: React.FC<DesktopOnlyProps> = () => {
  return (
    <div
      className={clsx(
        "w-full md:w-[1110px] text-center mb-[5rem]",
        "hidden md:flex flex-col gap-5"
      )}
    >
      <div className="relative w-full aspect-[1110/243] bg-gradient-to-r from-black to-[#222] rounded-lg overflow-hidden">
        <img
          src="/images/new_flavor.png"
          className="absolute top-0 left-0 z-1"
          alt="new_flavor.png"
        />
        <div className="absolute flex flex-col justify-center items-center gap-4 w-[40%] h-full top-0 right-0 z-2 text-white">
          <h3 className="text-lg font-bold">Try New Flavor</h3>
          <p>Citrus Monster</p>
          <button
            className={clsx(
              "w-[50px] md:w-[75px] h-[25px] md:h-[40px] bg-black/40 rounded-full",
              "text-[10px]"
            )}
          >
            View
          </button>
        </div>
      </div>
      <div className="relative flex items-center w-full aspect-[1110/243] bg-gradient-to-r from-black to-[#222] rounded-lg overflow-hidden">
        <img
          src="/images/devices.png "
          className="absolute top-0 left-0 z-1"
          alt="new_flavor.png"
        />
        <div className="absolute flex flex-col justify-center items-center gap-4 w-[50%] h-full top-0 right-[3rem] z-3 text-white">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[6px] px-5">
            {itemlist_data.map((item) => (
              <Item {...item} key={item.name} noMb />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex items-center w-full aspect-[1110/243] bg-gradient-to-r from-black to-[#222] rounded-lg overflow-hidden">
        <img
          src="/images/pods.png "
          className="absolute top-0 left-0 z-1"
          alt="new_flavor.png"
        />
        <div className="absolute flex flex-col justify-center items-center gap-4 w-[50%] h-full top-0 right-[3rem] z-3 text-white">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[6px] px-5">
            {itemlist_data.map((item) => (
              <Item {...item} key={item.name} noMb />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex items-center w-full aspect-[1110/243] bg-gradient-to-r from-black to-[#222] rounded-lg overflow-hidden">
        <img
          src="/images/disposable.png "
          className="absolute top-0 left-0 z-1"
          alt="new_flavor.png"
        />
        <div className="absolute flex flex-col justify-center items-center gap-4 w-[50%] h-full top-0 right-[3rem] z-3 text-white">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[6px] px-5">
            {itemlist_data.map((item) => (
              <Item {...item} key={item.name} noMb />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOnly;
