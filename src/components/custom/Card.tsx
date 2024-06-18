import { Link } from "react-router-dom";
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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 py-10">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md">
          <div className="relative h-[200px]">
            <img
              src={item.image}
              alt={item.name}
              className="absolute rounded-t-md h-[100%] object-cover"
            />
          </div>
          <div className="p-5">
            <p className="font-bold text-lg justify-start min-h-[48px]">
              {item.name}
            </p>
            <p className="pt-1 text-[#B6B6B6] text-xs font-semibold justify-start ">
              {item.description}
            </p>
            <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 mt-2">
              {item.label}
            </button>
          </div>

          <div className=" flex justify-between border-t-[1px] px-4 py-5">
          <div className="grid">
            <span className=" text-gray-500 text-sm ">{item.status}
            </span>
            <span
              className={`${
                item.discountprice ? "line-through text-red-600" : ""
              } `}
            >
              ${item.price}
            </span>
            <span className={`${item.discountprice == null ? "none" : ""}`}>
              {item.discountprice != null ? `$${item.discountprice}` : ""}
            </span>   
          </div>
          <div className="flex justify-center items-center">
            <Link to="/" className="text-red-500 hover:underline">
              Details
            </Link>
            </div>

          
        </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
