
import Custominputselect from "../../../custom/CustomInputSelect";
import Button from "../../../custom/Custombutton";
import DropDownConstant from "../../../constants/DropDownConstant";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Vechicle = () => {
  const methods = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        
      pickup:data.pickup,
      dropoff:data.dropoff,
      advance:data.advance,
      };
      console.log(resData);
    } catch (err) {
      console.log("Error Message", err);
    }
  };
  return (
    <div className="px-4  sm:px-10 ">
      <div className="bg-white rounded-md py-4 sm:py-10">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className=" flex justify-center flex-wrap xl:gap-20 lg:gap-5 gap-5 px-4 sm:px-10">
          
            <div className="w-full md:w-fit  ">
              <label htmlFor="Pickup" className="font-medium  text-black text-xs">
                Pick Up From
              </label>

              <Custominputselect
                name={"pickup"}
                placeHolder={"--Select--"}
                style=" p-20 "
                options={DropDownConstant}
              />
            </div>
           
            <div className=" w-full md:w-fit ">
              <label htmlFor="dropoff" className=" font-medium  text-black text-xs">
              Drop Off To
              </label>

              <Custominputselect
                name={"dropoff"}
                placeHolder={"--Select --"}
                style="p-20"
                options={DropDownConstant}
              />
            </div>
         
            <div className=" w-full md:w-fit ">
              <label htmlFor="Advance" className="font-medium text-black text-xs">
              Advance
              </label>

              <Custominputselect
                name={"advance"}
                placeHolder={"More"}
                style="p-20"
                options={DropDownConstant}
              />
            </div>
           
            
            
          </div>
          <div className="pt-5 sm:pt-8 w-full sm:w-fit m-auto pt-5">
            <Button
              title={"Search"}
              type="submit"
              styles="sm:px-20 py-2 text-white bg-red-600 rounded  "
            />
          </div>
        
         
        </form>
      </FormProvider>
      </div>
    </div>
  );
};

export default Vechicle;
