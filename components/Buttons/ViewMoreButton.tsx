import clsx from "clsx";
import { BiChevronRight } from "react-icons/bi";

interface ViewMoreButtonProps {}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = () => {
  return (
    <button
      className={clsx(
        "flex gap-1 text-md bg-gray-200 text-black/75 items-center rounded-full",
        "px-[5rem] py-[0.5rem]"
      )}
    >
      View More
      <BiChevronRight />
    </button>
  );
};

export default ViewMoreButton;
