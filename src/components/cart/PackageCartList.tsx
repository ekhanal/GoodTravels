// import { FaRegHeart } from "react-icons/fa6";
import { getValue } from "../../utils/object";
import { CiDiscount1 } from "react-icons/ci";
import { DealsProps } from "../../interface/package/package";

interface Props {
  data: DealsProps[];
  handleMoveViewDetails: (id: string) => void;
}

const PackageCartList: React.FC<Props> = ({ data, handleMoveViewDetails }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div key={index} className="w-full border rounded-lg">
            <div className="w-full group relative">
              <div className="w-full overflow-hidden hover:rounded-lg">
                <button
                  onClick={() => handleMoveViewDetails(getValue(item, "id"))}
                  className="w-full"
                >
                  <img
                    src={getValue(item, "image")}
                    alt={item.name}
                    className="w-full h-[250px] object-cover transition-transform duration-500 transform group-hover:scale-110 rounded-t-lg"
                  />
                </button>
              </div>
              <div className="flex justify-between items-center w-full absolute left-0 bottom-0 py-2 px-5">
                <button className="text-sm rounded-full px-3 py-1 text-white font-medium bg-blue-700">
                  {getValue(item, "name")}
                </button>
                {/* <FaRegHeart className="h-6 w-6 text-white" /> */}
              </div>
            </div>
            <div className="flex flex-col p-5">
              <div className="w-full flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <CiDiscount1 className="text-blue-400 text-4xl" />
                  <div className="flex gap-0 justify-center">
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
    </>
  );
};
export default PackageCartList;
