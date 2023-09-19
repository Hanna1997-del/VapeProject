import Item from "../Item";

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
  return (
    <div className="w-full md:w-[1110px] mt-[3rem] text-center mb-[5rem]">
      <h3 className="font-bold text-[45px]">Best Deals</h3>
      <p className="text-[20px] mb-[30px]">Just For You</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-[6px] px-5">
        {
            itemlist_data.map(item => (
                <Item {...item} key={item.name} />
            ))
        }
        
        
      </div>
    </div>
  );
};

export default ItemList;
