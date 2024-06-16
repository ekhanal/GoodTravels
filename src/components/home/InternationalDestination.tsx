

import Button from "../custom/Button";
import CardSection from "../custom/CardSection";
import { InternationalData } from "../../constants/CardData";

const InternationalDestinations= () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold mb-8">International Destinations</h1>
        <div className="flex justify-start w-full overflow-x-auto pt-6 gap-2 pb-5 ">
          <Button
            name={"City"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border  w-[250px]"
            }
          />
          <Button
            name={"Treak Destination"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px] "
            }
          />
          <Button
            name={"Historical Place"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px]"
            }
          />
          <Button
            name={"National Park"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px] "
            }
          />
          <Button
            name={"Treak Destination"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px] "
            }
          />
          <Button
            name={"Historical Place"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px]"
            }
          />
          <Button
            name={"National Park"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px] "
            }
            
          />
          <Button
            name={"city"}
            className={
              "text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border w-[250px] "
            }
            
          />
          
        </div>
        <div className="">
         
          <CardSection data={InternationalData} />
        
        </div>
      </div>
    </>
  );
};

export default InternationalDestinations;