import { useFormContext } from "react-hook-form";
import React from "react";
import { Link } from "react-router-dom";


interface Props {
  defaultValue?: boolean;
}

const EnquiryCheckbox: React.FC<Props> = ({ defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          defaultChecked={defaultValue}
          {...register("enquiryCheckbox", {
            required: "This field is required",
          })}
          className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label className="font-medium text-sm text-gray-700">
          By proceeding you accept our
          <Link  className="text-red-400 px-2 " to={"/"}>
            terms of use
          </Link>
          and
          <Link to={"/"} className="text-red-400 pl-2">
            data policy
          </Link>
        </label>
      </div>
      {errors.enquiryCheckbox && (
        <span className="text-red-500 text-sm">
          {errors.enquiryCheckbox.message?.toString()}
        </span>
      )}
    </>
  );
};

export default EnquiryCheckbox;
