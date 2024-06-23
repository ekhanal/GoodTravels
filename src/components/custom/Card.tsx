import Button from "../../custom/Custombutton";
interface Destination {
  name: string;
  description: string;
  image: string;
  label: string;
  status: string;
  price: number;
  discountprice: number | null;
}
interface Props {
  data: Destination[];
}
const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-4 gap-y-4 gap-2 md:gap-5 py-10">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md group">
          <div className="relative h-[200px] overflow-hidden hover:rounded-t-lg ">
            <img
              src={item.image}
              alt={item.name}
              className="absolute rounded-t-lg h-[100%] object-cover w-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <p className="font-bold text-lg justify-start min-h-[48px]">
              {item.name}
            </p>
            <p className="pt-1  text-xs text-black font-semibold justify-start ">
              {item.description}
            </p>
            <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 mt-2">
              {item.label}
            </button>
          </div>
          <div className=" flex justify-between border-t-[1px] px-4 py-5 ">
          <div className="grid ">
            <span className=" text-gray-500 text-sm ">{item.status}
            </span>
            <span
              className={`${
                item.discountprice ? "line-through text-red-600 text-sm" : "text-xl font-bold"
              } `}
            >
              ${item.price}
            </span>
            <span className={`${item.discountprice == null ? "none" : "text-xl font-bold"}`}>
              {item.discountprice != null ? `$${item.discountprice}` : ""}
            </span>
          </div>
          <div className="flex justify-center items-center">
            
            <Button title={"Book Now"} styles="border-[1px] rounded-full px-4 md:px-3  py-2 sm:px-5 sm:py-2 flex flex-wrap hover:bg-green-500 hover:text-white bg-white"/>

            </div>
        </div>
        </div>
      ))}
    </div>
  );
};
export default Card;