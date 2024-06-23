

import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    useForm,
  } from "react-hook-form";
import CustomInput from "../../custom/CustomInput";
import StartDate from "../../custom/datepicker/StartDate";
import Button from "../../custom/Custombutton"
import {formatDate} from "../../utils/date"
import TravelerSelect from "../../custom/TravelerSelect";




import { useAuthContext } from "../../hooks/contextConsumer.hook";
import { useNavigate } from "react-router-dom";

const EnquiryForm = () => {
  const navigate = useNavigate();

  const {travelers} = useAuthContext();
  
    const methods = useForm();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      try {
        const resData = {
          name: data.name,
          email: data.email,
          traveldate: formatDate(data.start_date),
            phone:data.phone,
          message: data.message,
          travelers:travelers,
        };
      console.log(resData);

       
      } catch (err) {
        console.log("Error Message", err);
      }
    };
   

  return (
    <>
      <div>
       

        <div className=" md:block md:col-span-3 rounded-md border py-5 px-3 md:max-w-[500px] md:min-w-[400px] shadow-lg h-max sticky top-10 bg-gray-100/50 ">
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="px-2 space-y-4 ">
        
        <div>
            <h1 className="text-center font-bold">Booking</h1>
            < p className="text-md text-center block font-thin">**Fill up this form for Instant Booking</p>
        </div>
        <div className="flex gap-5 items-center ">
              
              <CustomInput name={"name"} placeHolder={"Name"} type={"text"}  style="  self-end" />
            </div>

            <div className="flex gap-5  items-center ">
              
              <CustomInput name={"email"} placeHolder={"Email Address"} type={"email"} style="  self-end"/>
            </div>

            <div className="flex  gap-5 items-center ">
             
              <CustomInput name={"phone"} placeHolder={"98********"} type={"phone"} style="  self-end"/>
            </div>
            <div className="flex gap-5  items-center    ">
             
              <StartDate style="bg-white py-1.5 border"  />
            </div>
            <div className=" flex  gap-5 items-center">
             

              <TravelerSelect style=""/>
            </div>

            <div className="flex  gap-5 items-center ">
              
              <CustomInput name={"message"} placeHolder={"Message here"} type={"text"} style="  self-end"/>
            </div>
         
            <div className=" sm:pt-8  m-auto ">
            <Button
              title="Instant Booking"
              onClick={() => navigate("/tour/booking")}
              type="submit"
              styles=" sm:px-20 py-2  text-white rounded  bg-[#1d4ed8]"
            />
            
            </div>
            
    
            </form>

        </FormProvider>
        </div>
      </div>
    </>
  )
}

export default EnquiryForm
