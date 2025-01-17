import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  defaultValue?: string;
  name: string;
  placeHolder: string;
  type: string;
  required?: boolean;
  style?:string;
}

const CustomInput: React.FC<Props> = ({
  defaultValue,
  style,
  name,
  placeHolder,
  type,
  required,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  let validationRules: {
    [key: string]: string | { value: RegExp; message: string };
  } = {};

  if (required) {
    validationRules.required = "This field is required";
  }

  if (type === "email") {
    validationRules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    };
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        type={type}
        defaultValue={defaultValue}
        className={`w-full outline-none py-2 px-4 border-[1px] rounded-md border-[#CACACA] text-sm  text-slate-700 ${style}`}
        placeholder={placeHolder}
        {...register(name, validationRules)}
      />
      {required && errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
