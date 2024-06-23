import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getDaysInMonth } from "date-fns";

interface Props {
  required?: boolean;
  expiry_day?: any;
  expiry_month?: any;
  expiry_year?: any;
}

const PassportExpiryDate: React.FC<Props> = ({
  required,
  expiry_day,
  expiry_month,
  expiry_year,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const passportExpiredYear = watch("passportExpiredYear");
  const passportExpiredMonth = watch("passportExpiredMonth");
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    const days = expiry_year
      ? expiry_year
      : passportExpiredYear && expiry_month
      ? expiry_month
      : passportExpiredMonth
      ? getDaysInMonth(new Date(passportExpiredYear, passportExpiredMonth - 1))
      : 0;
    setDaysInMonth(days);
    setValue("passportExpiredDay", String(expiry_day ? expiry_day : days));
  }, [
    passportExpiredYear,
    passportExpiredMonth,
    setValue,
    expiry_day,
    expiry_year,
    expiry_month,
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
    if (expiry_year) {
      setValue("passportExpiredYear", expiry_year);
    }
    if (expiry_month) {
      setValue("passportExpiredMonth", expiry_month);
      const days = getDaysInMonth(new Date(expiry_year, expiry_month - 1));
      setDaysInMonth(days);
      setValue("passportExpiredDay", String(expiry_day ? expiry_day : days));
    }
  }, [expiry_year, expiry_month, expiry_day, setValue]);

  return (
    <div className="flex gap-5">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportExpiredYear", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={expiry_year}
          >
            <option value="">YYYY</option>
            {yearsExpired.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {errors.passportExpiredYear && (
          <span className="text-red-500 text-sm">
            {errors.passportExpiredYear.message?.toString()}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportExpiredMonth", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={expiry_month}
            disabled={!passportExpiredYear}
          >
            <option value="">MM</option>
            {monthNames.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        {errors.passportExpiredMonth && (
          <span className="text-red-500 text-sm">
            {errors.passportExpiredMonth.message?.toString()}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportExpiredDay", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={expiry_day}
            disabled={!passportExpiredMonth || !passportExpiredYear}
          >
            <option value="">DD</option>
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {errors.passportExpiredDay && (
          <span className="text-red-500 text-sm">
            {errors.passportExpiredDay.message?.toString()}
          </span>
        )}{" "}
      </div>
    </div>
  );
};

export default PassportExpiryDate;
