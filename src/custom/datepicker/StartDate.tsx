import React, { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  defaultValue?: Date;
  style?: string;
}

const StartDate: React.FC<Props> = ({ defaultValue, style }) => {
  const { control, setValue } = useFormContext();

  // Ensure defaultValue is a valid Date object or null
  const defaultDateValue = defaultValue ? new Date(defaultValue) : null;

  useEffect(() => {
    if (defaultValue) {
      setValue("start_date", defaultValue);
    }
  }, [defaultValue, setValue]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className={`w-full flex border-[1px] border-gray-200  items-center pr-1 px-2 gap-2 rounded-md ${style || ''}`}>
        <div className="text-lg text-black">
          <CiCalendarDate />
        </div> 
        <Controller
          control={control}
          name="start_date"
          defaultValue={defaultDateValue}
          render={({ field: { onChange: onDateChange, value } }) => (
            <ReactDatePicker
              dateFormat="yyyy-MM-dd"
              onChange={(date: Date | null) => {
                onDateChange(date); // Adjust to match the expected signature
              }}
              selected={value ? new Date(value) : defaultDateValue}
              customInput={
                <input className="w-full outline-none  border-none text-black" />
              }
              placeholderText={"Select Specific Date"}
              autoComplete="off"
              className="w-full text-sm text-black"
              wrapperClassName="w-full border-none outline-none "
            />
          )}
        />
      </div>
    </div>
  );
};

export default StartDate;
