import { useState } from "react";
import { itinerary } from "../../constants/CardData";
import { IoIosArrowUp } from "react-icons/io";



const Itinerary = () => {
  const [multiSelection, setMultiSelection] = useState<string[]>([]); // Specify type for multiSelection

  function handleMultiSelection(selectedid: string) { // Specify type for selectedid
    let copyids = [...multiSelection];
    const findIndexOfCurrentId = copyids.indexOf(selectedid);

    if (findIndexOfCurrentId === -1) {
      copyids.push(selectedid);
    } else {
      copyids.splice(findIndexOfCurrentId, 1);
    }
    
    console.log(copyids); // Log the updated array of IDs
    setMultiSelection(copyids); // Update state with the updated array
  }

  return (
    <>
      <div className="space-y-3">
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="border rounded transition-all transition-duration-300 bg-[#f9f9fa]"
            onClick={() => handleMultiSelection(item.id)}
          >
            <div className="p-3 flex items-center justify-between">
              <div className="flex gap-5 overflow-hidden">
                <h2 className="font-bold border px-2 py-1 rounded-full bg-[#1d4ed8] text-white text-nowrap">
                  Day {item.day}
                </h2>
                <h1 className="font-bold flex items-center text-nowrap">{item.title}</h1>
              </div>

              <IoIosArrowUp
                className={
                  "font-light transition-all duration-500 " +
                  (multiSelection.includes(item.id) ? "-rotate-180" : "rotate-0")
                }
              />
            </div>

            <ul
              className={
                "px-14 space-y-1 list-disc transition-all duration-500 easy-in-out overflow-hidden" +
                (multiSelection.includes(item.id) ? " pb-5 h-[150px]" : " h-0")
              }
            >
              <li>Please carry valid identification proof and the Thrillophilia voucher.</li>
              <li>Travel Insurance is recommended and charges are not included.</li>
              <li>Visa assistance will be provided however charges are not included.</li>
              <li>Please carry valid identification proof and the Thrillophilia voucher.</li>
              <li>Travel Insurance is recommended and charges are not included.</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Itinerary;
