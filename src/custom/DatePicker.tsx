import { useEffect, forwardRef, useImperativeHandle } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  defaultValue?: Date;
  required?: boolean;
}

interface DatePickerRef {
  focus: () => void;
}

const BookingDatePicker = forwardRef<DatePickerRef, Props>(
  ({ defaultValue, required }, ref) => {
    const { control, setValue } = useFormContext();
    const defaultDateValue = defaultValue ? new Date(defaultValue) : null;

    useEffect(() => {
      if (defaultValue) {
        setValue("start_date", defaultValue);
      }
    }, [defaultValue, setValue]);

    useImperativeHandle(ref, () => ({
      focus: () => console.log("Start date picker focused"),
    }));

    return (
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex border-[1px] border-gray-200 items-center pr-1 px-2 gap-2 rounded-md my-2">
          <div className="text-lg">
            <CiCalendarDate />
          </div>
          <Controller
            control={control}
            name="start_date"
            defaultValue={defaultDateValue}
            rules={{ required: "Date is required" }} // Add this line to make the field required
            render={({ field: { onChange: onDateChange, value }, fieldState: { error } }) => (
              <>
                <ReactDatePicker
                  dateFormat="yyyy-MM-dd"
                  onChange={(date: Date | null) => {
                    onDateChange(date); // Ensure onDateChange receives Date | null
                  }}
                  selected={value ? new Date(value) : defaultDateValue}
                  customInput={<input className="w-full outline-none border-none" />}
                  placeholderText={"Pick Your Date"}
                  autoComplete="off"
                  className="w-full text-sm text-black p-2"
                  wrapperClassName="w-full border-none outline-none "
                />
                {error && required && <p className="text-red-500 text-sm">{error.message}</p>}
              </>
            )}
          />
        </div>
      </div>
    );
  }
);

export default BookingDatePicker;
