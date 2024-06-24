import { FaRegHeart } from "react-icons/fa6";
import { getValue } from "../../utils/object";
import { CiDiscount1 } from "react-icons/ci";
import { DealsProps } from "../../interface/package/package";
// interface CardProps {
//   name: string;
//   price: string;
//   description: string;
//   image: string;
//   label: string;
//   // package_count: number;
//   status: string;
//   id: string;
// }
interface Props {
  data: DealsProps[];
}
const TravelDealCard: React.FC<Props> = ({ data }) => {
  console.log({ data });
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 md:gap-5  gap-x-4 gap-y-4 py-10">
        {data &&
          data.map((item: DealsProps) => (
            <div
              key={getValue(item, "id")}
              className=" bg-white shadow-md rounded-t-lg"
            >
              <div className=" group relative ">
                <div className="overflow-hidden hover:rounded-t-lg h-full ">
                  <a href={`/tour/tourdetails/${item.id}`}>
                    <img
                      src={getValue(item, "image")}
                      alt={item.name}
                      className=" rounded-ts-lg group-hover:scale-110  transition-transform duration-500 transform w-full h-[250px]  "
                    />
                  </a>
                </div>
                <div className="flex justify-between items-center w-full absolute top-0 py-2 px-5  ">
                  <button className=" text-sm  rounded full px-3 py-1 text-white  font-medium bg-blue-700 ">
                    {getValue(item, "name")}
                  </button>
                  <FaRegHeart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col p-5">
                <div className="w-full flex flex-col md:flex-row  justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CiDiscount1 className="text-blue-400 text-4xl" />
                    <div className="flex  gap-0 justify-center">
                      <span className="text-medium text-lg">
                        UPTO {getValue(item, "percent")}% OFF
                      </span>
                    </div>
                  </div>
                  <div>{getValue(item, "package_count")} package</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default TravelDealCard;
