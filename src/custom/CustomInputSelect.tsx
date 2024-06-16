import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
export interface Option {
  value: string;
  label: string;
  country?: string;
}

interface Props {
  defaultValue?: string;
  name: string;
  placeHolder: string;
  style?: string;
  options?: Option[];
  required?: boolean;
}

const CustomSelect: React.FC<Props> = ({
  defaultValue,
  name,
  placeHolder,
  style,
  options,
  required,
}) => {
  const {
    register,
    formState: { errors },
    setValue
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className={`w-full flex flex-col gap-2 `}>
      <div
        className={`${
          style ? "w-full" : "w-auto"
        } flex flex-col h-fit  rounded-md border-[1px] border-[#CACACA] `}
      >
        <select
          defaultValue={defaultValue}
          className={`w-full outline-none py-2 pl-4 rounded-md    text-sm text-slate-700 ${style}`}
          {...register(`${name}`, {
            required: required ? "This field is required" : false,
          })}
        >
          <option value="" hidden>
            {placeHolder}
          </option>
          {options?.map((item) => (
            <option value={item.label} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default CustomSelect;
