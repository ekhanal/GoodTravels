import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  defaultValue?: string;
  handleDateSelection: () => void; 
  styles?:string;
}

const DepartureDatePicker: React.FC<Props> = ({
  defaultValue,
  handleDateSelection,
  styles,
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <div className={`flex border-[0.1px] items-center pr-1 p-2 gap-2 rounded-md ${styles}`}>
        <div className="text-lg">
          <CiCalendarDate />
        </div>
        <Controller
          control={control}
          name="departureDate"
          defaultValue={defaultValue ? new Date(defaultValue) : new Date()}
          render={({ field: { onChange: onDateChange, value } }) => (
            <ReactDatePicker
              dateFormat="yyyy-MM-dd"
              onChange={(dateVal: Date) => {
                onDateChange(dateVal);
                handleDateSelection(); 
              }}
              selected={value as unknown as Date}
              customInput={<input className="outline-none" />}
              placeholderText={"Select Specific Date"}
              autoComplete="off"
              className="text-sm text-gray-400"
            />
          )}
        />
      </div>
    </div>
  );
};

export default DepartureDatePicker;
