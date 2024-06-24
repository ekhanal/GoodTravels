
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
import EndDate from "../../../custom/datepicker/EndDate";
import TravelerSelect from "../../../custom/TravelerSelect";
import { useAuthContext } from "../../../hooks/contextConsumer.hook";

const Domestic = () => {
  const methods = useForm();
  const {travelers} = useAuthContext();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        
        destination: data.tourpacakage,
        checkoutdate: formatDate(data.end_date),
        checkindate: formatDate(data.start_date),
        travelers: travelers,
        noofchild:data.noofchilds,
        fullname:data.fullname,
        address:data.address,
        email:data.email,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 px-2 px-4  pt-4">
          
            <div className="w-full">
              <label htmlFor="TourPackages" className="font-medium text-white text-xs">
                Tour Packages
              </label>

              <Custominputselect
                name={"tourpacakage"}
                placeHolder={"Select Tour Packages"}
                style=" p-10"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full  ">
              <label htmlFor="checkoutdate" className="font-medium text-white text-xs">
                Check Out Date
              </label>
              <StartDate style="bg-white py-1.5 border" />
            </div>
            <div className="w-full  ">
              <label htmlFor="checkindate" className="font-medium text-white text-xs">
                Check In Date
              </label>
              <EndDate style="bg-white py-1.5 border" />
            </div>

            <div className=" w-full">
              <label htmlFor="traveller" className="font-medium text-white text-xs">
                No. of Traveller
              </label>

              <TravelerSelect style=""/>
            </div>
            <div className=" w-full">
              <label htmlFor="noofchilds" className="font-medium text-white text-xs">
                No. of Childs
              </label>

              <Custominputselect
                name={"noofchilds"}
                placeHolder={"-Select -"}
                style="p-20"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full">
              <label htmlFor="Full Name" className="font-medium text-white text-xs">
               Full Name
              </label>
              <CustomInput name={"fullname"} placeHolder={"Full Name"} type={"text"} />
            </div>
            <div className="w-full">
              <label htmlFor="Address" className="font-medium text-white text-xs">
               Address
              </label>
              <CustomInput name={"address"} placeHolder={"Address"} type={"text"} />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="font-medium text-white text-xs">
              Email
              </label>
              <CustomInput name={"email"} placeHolder={"Email"} type={"email"} />
            </div>
            <div className="w-full">
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
              title={"Enquiry"}
              type="submit"
              styles="sm:px-20 py-2 text-white bg-red-600 rounded  "
            />
          </div>
          
        </form>
      </FormProvider>
    </div>
  );
};

export default Domestic;
