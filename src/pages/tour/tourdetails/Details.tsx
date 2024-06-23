import { useParams } from "react-router-dom";
import { TravelData } from "../../../constants/CardData";
import EnquiryForm from "../../../components/details/EnquiryForm";
import { TiTick } from "react-icons/ti";
import GoodToKnow from "../../../components/details/GoodToKnow";
import Button from "../../../custom/Custombutton";
import Itinerary from "../../../components/details/Itinerary";
import IncludedExcluded from "../../../components/details/IncludedExcluded";

import Review from "../../../components/details/Reviews";
const Details = () => {
  let { id } = useParams();
 
 
  return (
    <div>
      
      <div>
        {TravelData.map((item, index) => (
          <div key={index} className="">
            {item.id === id ? (
              <div>
                <div className="relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[60vh] object-cover opacity-100 "
                  />
                  <div className="flex justify-center ">
                    <div className="absolute bottom-0 w-full h-full flex flex-col items-center justify-center  bg-gradient-to-t from-stone-700 to-transparent">
                      <h1 className="text-5xl font-bold text-center text-white ">
                        {" "}
                        {item.name}
                      </h1>
                      <p className="text-xl text-white text-center p-5">
                        Starting at just <br />{" "}
                        <span className="text-white text-2xl font-bold ">
                          {item.price}
                        </span>
                      </p>
                      <div className=" flex justify-center items-center pb-5">
                        <Button title={"Enquiry"} styles="text-white  py-1.5 w-[200px] bg-[#1d4ed8]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-10 px-5 sm:px-10 xl:px-32 ">
                  <h1 className="text-3xl font-bold text-center pb-10">
                    {" "}
                    {item.name}
                  </h1>
                  <div className=" pb-10">
                    <h2 className="text-2xl font-bold text-center pb-5">
                      Tour Overview
                    </h2>
                    <p className="text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro odio exercitationem recusandae consequatur quaerat
                      dolorem voluptas harum aliquid minus accusantium repellat
                      temporibus eum dolore, sed molestias reiciendis voluptates
                      sunt praesentium!
                    </p>
                  </div>
                  <div className=" pb-10 flex justify-center gap-5">
                    <div className="w-full">
                      <div className="pb-10 ">
                        <h2 className="text-2xl font-bold  pb-5">
                          Tour Highlights
                        </h2>
                        <ul className="space-y-1">
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Explore the charming city of Zurich{" "}
                          </li>
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Visit the Swiss National Museum{" "}
                          </li>
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Discover the beauty of Lake Gurich{" "}
                          </li>
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Enjoy a boat ride on Lake Gurich
                          </li>
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Explore the charming city of Zurich{" "}
                          </li>
                          <li className="flex items-center">
                            <TiTick className="text-[#1d4ed8]" />
                            Explore the charming city of Zurich{" "}
                          </li>
                        </ul>
                      </div>
                      <div className=" ">
                        <h2 className="text-2xl font-bold  pb-5">Itinerary</h2>
                        <Itinerary/>
                      </div>
                    </div>
                    <div className="self-start hidden md:block">
                      {" "}
                      <EnquiryForm />
                    </div>
                  </div>
                  <div><IncludedExcluded/></div>
                  <div>
                    <GoodToKnow />
                  </div>
                  <div className="self-start pt-10 md:hidden block">
                      {" "}
                      <EnquiryForm />
                    </div>
                    <div>
                      <Review/>
                    </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Details;
