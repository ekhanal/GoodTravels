import React, { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  defaultValue?: Date;
  style?:string;
}

const EndDate: React.FC<Props> = ({ defaultValue,style }) => {
  const { control, setValue } = useFormContext();

  // Ensure defaultValue is a valid Date object
  const defaultDateValue = defaultValue ? new Date(defaultValue) : null;
  useEffect(() => {
    if (defaultValue) {
      setValue("end_date", defaultValue);
    }
  }, [defaultValue, setValue]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className={`w-full flex border-[1px] border-gray-200 dark:border-gray-500 items-center pr-1 px-2 gap-2 rounded-md ${style}`}>
        <div className="text-lg">
          <CiCalendarDate />
        </div>
        <Controller
          control={control}
          name="end_date"
          defaultValue={defaultDateValue}
          render={({ field: { onChange: onDateChange, value } }) => (
            <ReactDatePicker
              dateFormat="yyyy-MM-dd"
              onChange={(dateVal: Date) => {
                onDateChange(dateVal);
              }}
              selected={value ? new Date(value) : defaultDateValue}
              customInput={
                <input className="w-full outline-none dark:bg-[#182235] border-none" />
              }
              placeholderText={"Select Specific Date"}
              autoComplete="off"
              className="w-full text-sm text-gray-400"
              wrapperClassName="w-full border-none outline-none dark:bg-[#182235]"
            />
          )}
        />
      </div>
    </div>
  );
};

export default EndDate;
