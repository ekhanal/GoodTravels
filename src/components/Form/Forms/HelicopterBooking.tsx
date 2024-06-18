import Custominputselect from "../../../custom/CustomInputSelect";
import Button from "../../../custom/Custombutton";
import StartDate from "../../../custom/datepicker/StartDate";
import DropDownConstant from "../../../constants/DropDownConstant";
import CustomInput from "../../../custom/CustomInput";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { formatDate } from "../../../utils/date";

const HelicopterBooking = () => {
  const methods = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        orgin: data.orginlocation,
        destination: data.destinationlocation,
        requestdate: formatDate(data.start_date),
        travelers: data.travelers,
        name:data.name,
        phonenumber:data.phone,
      };
      console.log(resData);
    } catch (err) {
      console.log("Error Message", err);
    }
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-3 gap-5  px-4 pt-4">
            <div className="w-full md:w-fit ">
              <label htmlFor="Orgin" className="font-medium text-white text-xs">
                Orgin
              </label>

              <Custominputselect
                name={"orginlocation"}
                placeHolder={"Orginal Location "}
                style=" p-10"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full md:w-fit ">
              <label htmlFor="Destination" className="font-medium text-white text-xs">
                Destination
              </label>

              <Custominputselect
                name={"destinationlocation"}
                placeHolder={"Destination Location"}
                style=" p-10"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full md:w-fit   ">
              <label htmlFor="RequestDate" className="font-medium text-white text-xs">
                Request Date
              </label>
              <StartDate style="bg-white py-1.5 border" />
            </div>

            <div className=" w-full md:w-fit ">
              <label htmlFor="Travelers" className="font-medium text-white text-xs">
                Travelers
              </label>

              <Custominputselect
                name={"travelers"}
                placeHolder={"-Select -"}
                style="p-20"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full md:w-fit">
              <label htmlFor="Name" className="font-medium text-white text-xs">
                Name
              </label>
              <CustomInput name={"name"} placeHolder={"Name"} type={"text"} />
            </div>
            <div className="w-full md:w-fit">
              <label htmlFor="PhoneNumber" className="font-medium text-white text-xs">
                Phone/Mobile
              </label>
              <CustomInput
                name={"phone"}
                placeHolder={"984-1234567"}
                type={"number"}
              />
            </div>
          </div>
          <div className="pt-5 sm:pt-8 px-4 w-full sm:w-fit m-auto ">
            <Button
              title={"Book Helicopter"}
              type="submit"
              styles="sm:px-20 py-2 text-white bg-red-600 rounded  "
            />
          </div>
          
        </form>
      </FormProvider>
    </div>
  );
};

export default HelicopterBooking;
