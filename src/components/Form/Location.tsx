import React, { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { locationData } from "../../constants/location";

const Location: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const { setValue } = useFormContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data: allLocation } = useGetAllCountry();

  const storeLocation: any = [];
  allLocation &&
    allLocation?.map((item: any) => {
      const formatTourType = {
        label: item.name,
        value: item.id,
        country: item.country_name,
      };
      storeLocation.push(formatTourType);
    });

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdownRef.current) return;

      if (
        !open ||
        (dropdownRef.current && dropdownRef.current.contains(target as Node))
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [open]);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen((prevValue) => !prevValue);
  };

  const handleClick = (value: string, country: any) => {
    setSelectedLocation(country);
    const combinedValue = `${value}&${country}`;
    localStorage.setItem("country", country);
    setValue("location", combinedValue);
    setOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue("location", inputValue);
  };

  return (
    <div className="relative flex flex-col gap-1 w-full b-white rounded-lg rounded-r-lg md:rounded-r-none p-2 bg-white">
      <div className="flex items-center gap-1">
        <CiLocationOn className="text-gray-500 font-extrabold text-xl" />
        <p className="font-bold text-black text-sm uppercase">Location</p>
      </div>
      <input
        type="text"
        className="outline-none py-2 text-sm text-black"
        placeholder="Where are you going?"
        value={selectedLocation}
        onClick={handleOpen}
        onChange={handleInputChange}
      />
      {open && (
        <div
          ref={dropdownRef}
          className="absolute w-full top-[78px] -left-0 bg-white rounded-lg z-[10]"
        >
          {storeLocation &&
            storeLocation.map((item: any, index: any) => (
              <div
                className={`flex justify-between items-center hover:bg-[#3DB367] hovered  ${
                  index === 0 ? "hover:rounded-t-lg" : ""
                } ${
                  item.index === locationData.length ? "hover:rounded-b-lg" : ""
                } py-2 px-5`}
                key={item.id}
                onClick={() => handleClick(item.value, item.country)}
              >
                <p className="text-black font-medium">{item.country}</p>
                <p className="text-gray-300 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Location;
function useGetAllCountry(): { data: any; } {
  throw new Error("Function not implemented.");
}

