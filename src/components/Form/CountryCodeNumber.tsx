import { useFormContext } from "react-hook-form";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

interface Props {
  defaultValue?: string;
  countriesCode: string[]; // Update the data type to string
  countriesDailCode: { [key: string]: string }; // Ensure that this maps to string values
}

const PhoneNumber: React.FC<Props> = ({
  defaultValue,
  countriesCode,
  countriesDailCode,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [countryCode, setCountryCode] = useState("NP");
  const [dialCode, setDialCode] = useState<string | number>("+977"); 

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDialCode(value);
  };

  const onCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCountryCode(value);
    const newDialCode = countriesDailCode[value] ?? "+977";
    setDialCode(newDialCode);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[#DFDFDF]">Phone </label>

      <div className="flex gap-4 items-end justify-start">
        <div className="w-28  border-b-2 flex gap-2 items-center justify-center">
          <ReactCountryFlag
            countryCode={countryCode}
            style={{
              fontSize: "1.2em",
              lineHeight: "2em",
            }}
          />
          <select
            className="text-white  bg-transparent py-4 text-sm font-bold w-full outline-none"
            {...register("selectService", {
              required: "SelectService is required",
            })}
            defaultValue={defaultValue} 
            style={{ color: "white", font: "bold", background: "black" }}
            // placeholder="Please Select"
            onChange={onCountryCodeChange}
            value={countryCode}
          >
            <option value="NP">NP</option>
            {countriesCode?.map((data: string) => ( // Update the data type to string
              <option value={data} key={data}>
                {data.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <input
            className="pb-3 w-full text-white  font-medium border-b-2 bg-transparent outline-none "
            {...register("phoneNumber", {
            })}
            value={dialCode}
            onChange={onPhoneNumberChange}
          />
          {errors.phoneNumber && (
            <p className="text-xs italic text-red-700">
              {errors.phoneNumber.message?.toString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
