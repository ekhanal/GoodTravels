// import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Card from "../custom/Card";

import { DomesticData } from "../../constants/CardData";
import { KathmanduData } from "../../constants/CardData";
import {BhaktapurData} from "../../constants/CardData"
import {LalitpurData} from "../../constants/CardData"
const DomesticDestination1 = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <Tab.Group className="w-full">
            <div className="w-full ">
          <div className="flex justify-between">
            <Tab.List className="flex gap-5 md:gap-10">
            <div className="text-3xl">
              <span className="font-light">Domestic</span>{" "}
              <span className="font-bold">Destinations</span>{" "}
            </div>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-5  ${
                      selected ? "text-green-500 bg-green-100" : "text-black"
                    }`}
                  >
                    ALL
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-5  ${
                      selected ? "text-green-500 bg-green-100" : "text-black"
                    }`}
                  >
                   KATHMANDU
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-5  ${
                      selected ? "text-green-500 bg-green-100" : "text-black"
                    }`}
                  >
                  BHAKTAPUR
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={`border-[1px] rounded-full px-5  ${
                      selected ? "text-green-500 bg-green-100" : "text-black"
                    }`}
                  >
                    LALITPUR
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="w-full">
            <Tab.Panel className="w-full">
              <Card data={DomesticData} />
            </Tab.Panel>
            <Tab.Panel>
            <Card data={KathmanduData} />
            </Tab.Panel>
            <Tab.Panel>
            <Card data={BhaktapurData} />
            </Tab.Panel>
            <Tab.Panel>
            <Card data={LalitpurData} />
            </Tab.Panel>
          </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DomesticDestination1;
