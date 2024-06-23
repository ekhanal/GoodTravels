import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getDaysInMonth } from "date-fns";

interface Props {
  required?: boolean;
  birth_day?: any;
  birth_year: any;
  birth_month?: any;
}

const DateOfBirth: React.FC<Props> = ({
  required,
  birth_day,
  birth_month,
  birth_year,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const dateOfBirthYear = watch("dateOfBirthYear");
  const dateOfBirthMonth = watch("dateOfBirthMonth");
  const [daysInMonths, setDaysInMonths] = useState(0);

  useEffect(() => {
    const days = birth_year
      ? birth_year
      : dateOfBirthYear && birth_month
      ? birth_month
      : dateOfBirthMonth
      ? getDaysInMonth(
          new Date(
            birth_year ? birth_year : dateOfBirthYear,
            birth_month ? birth_month : dateOfBirthMonth - 1
          )
        )
      : 0;
    setDaysInMonths(days);
    setValue("dateOfBirthDay", String(birth_day ? birth_day : days));
  }, [
    birth_year,
    birth_month,
    dateOfBirthYear,
    dateOfBirthMonth,
    birth_day,
    setValue,
  ]);

  const yearsExpired = Array.from({ length: 201 }, (_, index) => 1900 + index);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    if (birth_year) {
      setValue("dateOfBirthYear", birth_year);
    }
    if (birth_month) {
      setValue("dateOfBirthMonth", birth_month);
      const days = getDaysInMonth(new Date(birth_year, birth_month - 1));
      setDaysInMonths(days);
      setValue("dateOfBirthDay", String(birth_day ? birth_day : days));
    }
  }, [birth_year, birth_month, birth_day, setValue]);

  return (
    <div className="flex gap-5">
      {/* Year select */}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("dateOfBirthYear", {
              required: required ? "this field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={birth_year}
          >
            <option value="">YYYY</option>
            {yearsExpired.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {errors.dateOfBirthYear && (
          <div className="text-red-500 text-sm">
            {errors.dateOfBirthYear.message?.toString()}
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("dateOfBirthMonth", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={birth_month}
            disabled={!dateOfBirthYear}
          >
            <option value="">MM</option>
            {monthNames.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        {errors.dateOfBirthMonth && (
          <span className="text-red-500 text-sm">
            {errors.dateOfBirthMonth.message?.toString()}
          </span>
        )}
      </div>

      {/* Month select */}
      {/* <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("dateOfBirthDay", {
              required: required ? "this field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={birth_day}
            disabled={!dateOfBirthMonth || !dateOfBirthYear}
          >
            <option value="">DD</option>
            {Array.from({ length: daysInMonths }).map((_, index) => (
              <option
                key={index + 1}
                value={index + 1}
                selected={index + 1 === birth_day}
              >
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {errors.dateOfBirthDay && (
          <div className="text-red-500 text-sm">
            {errors.dateOfBirthDay.message?.toString() || "Please select a day"}
          </div>
        )}
      </div> */}

      {/* Day select */}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("dateOfBirthDay", {
              required: required ? "this field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={birth_day}
            disabled={!dateOfBirthMonth || !dateOfBirthYear}
          >
            <option value="">DD</option>
            {Array.from({ length: daysInMonths }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {errors.dateOfBirthDay && (
          <div className="text-red-500 text-sm">
            {errors.dateOfBirthDay.message?.toString() || "Please select a day"}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateOfBirth;
