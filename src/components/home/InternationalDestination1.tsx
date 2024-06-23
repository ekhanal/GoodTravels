// import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Card from "../custom/Card";
import { InternationalData } from "../../constants/CardData";
const InternationalDestination = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <Tab.Group className=" w-full">
          <div className="w-full flex flex-col md:flex-row gap-5 justify-between">
            <div className="text-3xl">
              <span className="font-light">International</span>{" "}
              <span className="font-bold">Destinations</span>{" "}
            </div>
            <Tab.List className="max-w-full overflow-x-auto whitespace-nowrap scroll-mx-0 flex gap-5 md:gap-10 hide-scrollbar">
            <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-4 py-2 ${
                      selected ? "text-white bg-green-500" : "text-black"
                    }`}
                  >
                    ALL
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-4  py-2 sm:px-5 sm:py-2 flex flex-wrap ${
                      selected ? "text-white bg-green-500" : "text-black"
                    }`}
                  >
                    ASIA
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-4 py-2 sm:px-5 sm:py-2 flex flex-wrap ${
                      selected ? "text-white bg-green-500" : "text-black"
                    }`}
                  >
                    AFRICA
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-4 py-2 sm:px-5 sm:py-2 flex flex-wrap ${
                      selected ? "text-white bg-green-500" : "text-black"
                    }`}
                  >
                    EUROPE
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="w-full">
            <Tab.Panel className="w-full">
              <Card data={InternationalData} />
            </Tab.Panel>
            <Tab.Panel>
              <Card data={InternationalData} />
            </Tab.Panel>
            <Tab.Panel>
              <Card data={InternationalData} />
            </Tab.Panel>
            <Tab.Panel>
              <Card data={InternationalData} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
export default InternationalDestination ;