
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Button from "../../custom/Custombutton";


interface Props{
  button1:string;
  button2: string;
  tabform1: React.ReactNode;
  tabform2: React.ReactNode;
}

const Forms:React.FC<Props> = ({button1,button2,tabform1,tabform2}) => {

  return (
    <div>
      
          <TabGroup>
            <TabList>
              <div className="flex gap-5 px-4">
                <Tab className="outline-none">
                  {({ selected }) => (
                    <Button
                      title={button1}
                      styles={`px-2 py-1 text-xs sm:text-sm font-medium w-fit ${
                        selected
                          ? "text-white bg-[#ec131b]"
                          : "text-black bg-white"
                      }`}
                      type="button"
                    />
                  )}
                </Tab>
                <Tab className="outline-none">
                  {({ selected }) => (
                    <Button
                      title={button2}
                      styles={`px-2 py-1 font-medium  text-xs sm:text-sm  w-fit ${
                        selected
                          ? "text-white bg-[#ec131b]"
                          : "text-black bg-white"
                      }`}
                      type="button"
                    />
                  )}
                </Tab>
              </div>
            </TabList>
            <TabPanels>
              <TabPanel>
                {tabform1}
              </TabPanel>
              <TabPanel>
              {tabform2}
              </TabPanel>
             
            </TabPanels>
          </TabGroup>
        
    </div>
  );
};

export default Forms;
