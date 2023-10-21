import ViewMoreButton from "./Buttons/ViewMoreButton";
import Title from "./Title";

interface NewReleaseListProps {}

const itemlist_data = [
    {

      name: "Orange Vape",
        detail: "Lorem ipsum dolor sit",
      price: "30,000",
      color: "#E9BA2F",
      image: "/images/new_release_1.png",
    },
    {
      name: "Strawberry Vape",
      detail: "Lorem ipsum dolor sit",
      price: "30,000",
      color: "#FA8B94",
      image: "/images/new_release_2.png",
    },
    {
      name: "Mint Vape",
      detail: "Lorem ipsum dolor sit",
      price: "30,000",
      color: "#3EB4EB",
      image: "/images/new_release_3.png",
    },
    {
      name: "Avacado Vape",
      detail: "Lorem ipsum dolor sit",
      price: "30,000",
      color: "#76D257",
      image: "/images/new_release_4.png",

    },
  ];

const NewReleaseList: React.FC<NewReleaseListProps> = () => {
  return (
    <div className="w-full md:w-[1110px] mt-[1rem] md:mt-[2rem] text-center mb-[5rem]">
      <Title title={<><span className="text-red-500">New</span> Released</>} subTitle="Try Our Latest Flavors Here" />
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[10px] px-5 mb-10">
        {
            itemlist_data.map(item => (
                <div 
                    className="w-full relative aspect-[1000/666] rounded-lg overflow-hidden cursor-pointer" 
                    key={item.name}
                    style={{backgroundColor: item.color}}
                >
                    <img src={item.image} className="absolute top-0 left-0 z-1" alt={item.name} />
                    <div className="absolute top-0 left-0 flex flex-col justify-center w-[50%] h-full z-2 px-2 md:px-5 text-start gap-1 text-white">
                        <h5 className="md:text-sm font-bold">{item.name}</h5>
                        <p className="text-xs hidden md:block">{item.detail}</p>
                        <p className="text-sm hidden md:block">{item.price}MMK</p>
                    </div>
                </div>
            ))
        }
        
      </div>
      <div className="w-full flex justify-center">
        <ViewMoreButton/>
      </div>
    </div>
  );
};

export default NewReleaseList;
