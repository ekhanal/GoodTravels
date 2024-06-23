import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const Review = () => {
  return (
    <>
      <div className="bg-white rounded-sm py-10 ">
        <h1 className="text-2xl font-bold text-center">Reviews and Ratings</h1>
        <div className="text-xl font-semibold pt-4 text-center md:text-left ">
          <span>Total Reviews:</span>
          <span className="text-yellow-500"> 1000</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 py-10">
          <div className="text-yellow-500 font-medium text-center  md:pt-10">
            <span className="text-5xl">4.5</span>
            <div className="flex justify-center md:justify-start mt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="grid gap-2 w-full px-4 md:pr-48 ">
            <div className="flex space-x-2 w-full items-center">
              
            {[1,2,3,4,5].map((index)=>(
                   <FaStar key={index}  className="text-yellow-500 text-xl" />
                ))}

              <div className="w-full h-2 bg-gray-200 rounded-md relative">
                <div className="absolute left-0 top-0 bottom-0 w-[90%] bg-yellow-500 rounded-md"></div>
              </div>
            </div>
            <div className="flex space-x-2 w-full items-center">
                {[1,2,3,4,5].map((index)=>(
                    index<5?
                    <FaStar key={index}  className="text-yellow-500 text-xl" />:
                    <FaRegStar key={index}  className="text-yellow-500 text-xl" />
                ))}
            
           
              <div className="w-full h-2 bg-gray-200 rounded-md relative">
                <div className="absolute left-0 top-0 bottom-0 w-[80%] bg-yellow-500 rounded-md"></div>
              </div>
            </div>
            <div className="flex space-x-2 w-full items-center">
            {[1,2,3,4,5].map((index)=>(
                    index<4?
                    <FaStar key={index}  className="text-yellow-500 text-xl" />:
                    <FaRegStar key={index}  className="text-yellow-500 text-xl" />
                ))}
              <div className="w-full h-2 bg-gray-200 rounded-md relative">
                <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-yellow-500 rounded-md"></div>
              </div>
            </div>
            <div className="flex space-x-2 w-full items-center">
            {[1,2,3,4,5].map((index)=>(
                    index<3?
                    <FaStar key={index}  className="text-yellow-500 text-xl" />:
                    <FaRegStar key={index}  className="text-yellow-500 text-xl" />
                ))}
              <div className="w-full h-2 bg-gray-200 rounded-md relative">
                <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-yellow-500 rounded-md"></div>
              </div>
            </div>
            <div className="flex space-x-2 w-full items-center">
            {[1,2,3,4,5].map((index)=>(
                    index<2?
                    <FaStar key={index}  className="text-yellow-500 text-xl" />:
                    <FaRegStar key={index}  className="text-yellow-500 text-xl" />
                ))}
              <div className="w-full h-2 bg-gray-200 rounded-md relative">
                <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-yellow-500 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-200  w-full rounded pt-10 ">
          <div className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <div className="flex justify-between items-center">
              <span className="">John Doe</span>
              <span className="flex space-x-2">
                <FaStar className="text-yellow-500 text-xl" />
                {"4.0/5 "}
              </span>
            </div>
            <span className="text-gray-300">Reviewed: 2021-12-12</span>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit
              ab nesciunt error eius veniam perferendis voluptates libero ipsa
            </p>
          </div>
          <div className="border border-gray-300 mt-3 rounded-md px-3 py-2">
            <div className="flex justify-between items-center">
              <span className="">John Doe</span>
              <span className="flex space-x-2">
                <FaStar className="text-yellow-500 text-xl" />
                {"4.0/5 "}
              </span>
            </div>
            <span className="text-gray-300">Reviewed: 2021-12-12</span>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit
              ab nesciunt error eius veniam perferendis voluptates libero ipsa
            </p>
          </div>
          <div className="border border-gray-300 mt-3 rounded-md px-3 py-2">
            <div className="flex justify-between items-center">
              <span className="">John Doe</span>
              <span className="flex space-x-2">
                <FaStar className="text-yellow-500 text-xl" />
                {"4.0/5 "}
              </span>
            </div>
            <span className="text-gray-300">Reviewed: 2021-12-12</span>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit
              ab nesciunt error eius veniam perferendis voluptates libero ipsa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;