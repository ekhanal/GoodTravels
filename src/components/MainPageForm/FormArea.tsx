import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Button from "../../custom/Custombutton";

import OneWay from "./Forms/OneWay";
import TwoWay from "./Forms/TwoWay";
import Forms from "./Forms";
import HelicopterBooking from "./Forms/HelicopterBooking";
import HelicopterRescue from "./Forms/HelicopterRescue";
import Domestic from "./Forms/Domestic";
import International from "./Forms/International";
import Vechicle from "./Forms/Vechicle";

const FormArea = () => {
  return (
    <div className="">
      <TabGroup>
        <TabList>
          <div className=" flex overflow-x-auto gap-2 md:gap-4 py-5">
            <Tab className="outline-none">
              {({ selected }) => (
                <Button
                  title={"Flights"}
                  styles={`  px-4 py-1  whitespace-nowrap ${
                    selected
                      ? "text-white bg-[#ec131b] "
                      : "text-black bg-white"
                  }`}
                />
              )}
            </Tab>
            <Tab className="outline-none">
              {({ selected }) => (
                <Button
                  title={"Mountains Flights"}
                  styles={` text-black px-4 py-1  whitespace-nowrap ${
                    selected
                      ? "text-white bg-[#ec131b] "
                      : "bg-white text-black"
                  }`}
                />
              )}
            </Tab>

            <Tab className="outline-none">
              {({ selected }) => (
                <Button
                  title={" Tour Packages"}
                  styles={` text-black px-4 py-1 whitespace-nowrap ${
                    selected
                      ? "text-white bg-[#ec131b] "
                      : "bg-white text-black"
                  }`}
                />
              )}
            </Tab>

            <Tab className="outline-none">
              {({ selected }) => (
                <Button
                  title={"Vechicle"}
                  styles={` text-black px-4 py-1 whitespace-nowrap ${
                    selected
                      ? "text-white bg-[#ec131b] "
                      : "bg-white text-black"
                  }`}
                />
              )}
            </Tab>
          </div>
        </TabList>

        <TabPanels>
          <div className="">
            <div className="bg-[#01548d] py-5  rounded-md">
              <TabPanel>
                <Forms button1={"One way"} button2={"Two Way"} tabform1={<OneWay/>} tabform2={<TwoWay/>} />
              </TabPanel>
              <TabPanel>
                <Forms button1={"HelicopterBooking"} button2={"HelicopterRescue"} tabform1={<HelicopterBooking/>} tabform2={<HelicopterRescue/>}/>
              </TabPanel>
              <TabPanel>
              <Forms button1={"Domestic"} button2={"International"} tabform1={<Domestic/>} tabform2={<International/>}/>
              </TabPanel>
              <TabPanel>
                <Vechicle/>
              </TabPanel>
            </div>
          </div>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
export default FormArea;
