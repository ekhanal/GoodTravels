import { FaRegHeart } from "react-icons/fa6";
import { LuClock7 } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
interface CardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  label: string;
  status: string;
}
interface Props {
  data: CardProps[];
}
const TravelDealCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:gap-5  gap-x-4 gap-y-4 py-10">
        {data.map((item, index) => (
          <div key={index} className=" bg-white shadow-md rounded-t-lg">
            <div className=" group relative ">
              <div className="overflow-hidden hover:rounded-t-lg h-full ">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" rounded-t-lg group-hover:scale-110  transition-transform duration-500 transform w-full h-[250px]  "
                />
              </div>
              <div className="flex justify-between items-center w-full absolute top-0 py-2 px-5  ">
                <button className=" text-sm  rounded full px-3 py-1 text-white  font-medium bg-blue-700 ">
                  {item.label}
                </button>
                <FaRegHeart className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="p-5">
              <p className="font-bold text-lg justify-start min-h[48px]">
                {item.name}
              </p>
              <div className="flex justify-start items-center gap-2 ">
                <FaStar className="h-4 w-4 text-yellow-700" />
                <p className="pt-1 text-gray-600 text-xs font-semibold justify-start">
                  {item.status}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-200 px-4 py-5 gap-4 sm:gap-0">
              <span className="text-xl text-blue-600 font-bold sm:text-lg">
                {item.price}
              </span>
              <div className="flex items-center gap-2">
                <LuClock7 className="h-4 w-4 text-gray-600 sm:h-3 sm:w-3" />
                <span className="text-sm text-gray-600 sm:text-xs">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TravelDealCard;