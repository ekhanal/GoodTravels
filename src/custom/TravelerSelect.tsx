import { useEffect, useState, useRef } from "react";

import TravelerPopUp from "./TravelerPopUp";
import useClickOutside from "../hooks/clickOutside.hook";
import { useAuthContext } from "../hooks/contextConsumer.hook";
interface Props {
  style?: string;
  
}

const TravelerSelect: React.FC<Props> = ({  style }) => {
  // const [visible,setVisible]=useState(false);
  const divref=useRef<HTMLDivElement>(null);
  const {travelers} = useAuthContext();
 
  const [state, setState] = useState(false);
  useClickOutside(divref,state,setState);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateButtonWidth = () => {
      if (buttonRef.current) {
        setButtonWidth(buttonRef.current.offsetWidth);
      }
    };

    updateButtonWidth();
    window.addEventListener("resize", updateButtonWidth);

    return () => {
      window.removeEventListener("resize", updateButtonWidth);
    };
  }, [state]);
  const renderTravelers = () => {
    if (!travelers) {
        return '--Select--';
    }

    const { adult, child, infant } = travelers;
    return `Adults: ${adult}, Children: ${child}, Infants: ${infant}`;
};

  return (
    <div className={`w-full flex flex-col gap-2`} ref={divref}>
      <div
        className={`${
          style ? "w-full" : "w-auto"
        } flex flex-col h-fit rounded-md gap-0.5 border-[#CACACA]`}
      >
        <div style={{ position: "relative" }}>
          <button
            ref={buttonRef}
            className="px-3 py-2.5 bg-white rounded-md text-xs text-start text-black w-full font-thin border"
            type="button"
            onClick={() => setState(!state)}
          >
             {renderTravelers()}
          </button>

          {state && (
            <div
              className="absolute bg-white shadow-md rounded-md "
              style={{
                top: "100%",
                left: 0,
                width: buttonWidth,
                zIndex: 1000,
              }}
            >
              <TravelerPopUp style={""} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelerSelect;
