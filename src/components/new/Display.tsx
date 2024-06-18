import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import DestinationImage2 from "../../assets/images/Delhi.jpg";
import DestinationImage1 from "../../assets/images/Bangkok.jpg";
import DestinationImage3 from "../../assets/images/Singapore.jpg";

const Display = () => {
  return (
    <div className="px-5 md:px-10 lg:px-28 py-5 bg-[#F5F6F8]">
      <div className="flex">
        <Tab.Group>
          <div className="w-[100%]">
            <Tab.List className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-5 md:gap-10">
              <div className="text-3xl">
                <span className="font-light">International</span>{" "}
                <span className="font-bold">Destinations</span>{" "}
              </div>
              <div className="flex gap-5 md:gap-10">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                    className={`border-[1px] rounded-full px-5  border-gray-500 ${
                      selected ? "text-green-500 bg-green-100" : " text-black"
                    }`}
                    >
                      ALL
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                    className={`border-[1px] rounded-full px-5  border-gray-500 ${
                      selected ? "text-green-500 bg-green-100" : " text-black"
                    }`}
                    >
                      ASIA
                    </button>
                  )}
                </Tab>

                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                    className={`border-[1px] rounded-full px-5  border-gray-500 ${
                      selected ? "text-green-500 bg-green-100" : " text-black"
                    }`}
                    >
                      ISLAND
                    </button>
                  )}
                </Tab>

                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`border-[1px] rounded-full px-5  border-gray-500 ${
                        selected ? "text-green-500 bg-green-100" : " text-black"
                      }`}
                    >
                      AFRICA
                    </button>
                  )}
                </Tab>
              </div>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 md:gap-5 py-10">
                  {/* first item */}
                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]  ">
                      <img
                        src={DestinationImage2}
                        alt="image"
                        className="absolute rounded-t-md h-[100%] object-cover "
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>

                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]  ">
                      <img
                        src={DestinationImage1}
                        alt="image"
                        className="absolute rounded-t-md h-[100%] object-cover "
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>

                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]  ">
                      <img
                        src={DestinationImage3}
                        alt="image"
                        className="absolute rounded-t-md h-[100%] object-cover "
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>

                  {/* Third item */}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5 py-10">
                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]">
                      <img
                        src={DestinationImage2}
                        alt="image"
                        className="absolute rounded-t-md max-h-[100%]"
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5 py-10">
                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]  ">
                      <img
                        src={DestinationImage1}
                        alt="image"
                        className="absolute rounded-t-md h-[100%] object-cover "
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5 py-10">
                  <div className="bg-white shadow-md rounded-md">
                    <div className="relative h-[200px]  ">
                      <img
                        src={DestinationImage3}
                        alt="image"
                        className="absolute rounded-t-md max-h-[100%] "
                      />
                    </div>
                    <div className="px-4 py-5 ">
                      <p className="font-bold">Singapore StopOver</p>
                      <p className="pt-1 text-[#B6B6B6] text-xs font-semibold">
                        3 Nights / 4 Days
                      </p>
                      <div className="flex flex-wrap gap-5 pt-3">
                        <button className="font-light text-xs p-1 border-[1px] rounded-full px-5 ">
                          Family
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-t-[1px] px-4 py-5">
                      <div className="text-red-500">Expired</div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Display;
