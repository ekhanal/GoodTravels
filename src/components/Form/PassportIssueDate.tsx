import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getDaysInMonth } from "date-fns";

interface Props {
  required?: boolean;
  issue_day?: any;
  issue_year?: any;
  issue_month?: any;
}
const PassportIssueDate: React.FC<Props> = ({
  required,
  issue_day,
  issue_month,
  issue_year,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const passportSelectedYear = watch("passportSelectedYear");
  const passportSelectedMonth = watch("passportSelectedMonth");
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    const days = issue_year
      ? issue_year
      : passportSelectedYear && issue_month
      ? issue_month
      : passportSelectedMonth
      ? getDaysInMonth(
          new Date(
            issue_year ? issue_year : passportSelectedYear,
            issue_month ? issue_month : passportSelectedMonth - 1
          )
        )
      : 0;
    setDaysInMonth(days);
    setValue("passportSelectedDay", String(issue_day ? issue_day : days));
  }, [
    issue_year,
    issue_month,
    issue_day,
    passportSelectedYear,
    setValue,
    passportSelectedMonth,
  ]);

  const years = Array.from({ length: 201 }, (_, index) => 1900 + index);

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
    if (issue_year) {
      setValue("passportSelectedYear", issue_year);
    }
    if (issue_month) {
      setValue("passportSelectedMonth", issue_month);
      const days = getDaysInMonth(new Date(issue_year, issue_month - 1));
      setDaysInMonth(days);
      setValue("passportSelectedDay", String(issue_day ? issue_day : days));
    }
  }, [issue_year, issue_month, issue_day, setValue]);

  return (
    <div className="flex gap-5">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportSelectedYear", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={issue_year}
          >
            <option value="">YYYY</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {errors.passportSelectedYear && (
          <span className="text-red-500 text-sm">
            {errors.passportSelectedYear.message?.toString()}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportSelectedMonth", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={issue_month}
            disabled={!passportSelectedYear}
          >
            <option value="">MM</option>
            {monthNames.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {errors.passportSelectedMonth && (
          <span className="text-red-500 text-sm">
            {errors.passportSelectedMonth.message?.toString()}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col h-fit rounded-md border-[1px] border-[#CACACA] pr-2">
          <select
            {...register("passportSelectedDay", {
              required: required ? "This field is required" : false,
            })}
            className="w-full outline-none py-2 pl-4 rounded-md text-sm text-slate-700"
            defaultValue={issue_day}
            disabled={!passportSelectedMonth || !passportSelectedYear}
          >
            <option value="">DD</option>
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        {errors.passportSelectedDay && (
          <span className="text-red-500 text-sm">
            {errors.passportSelectedDay.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default PassportIssueDate;
