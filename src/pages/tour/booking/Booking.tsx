



import ConfirmEmailAddress from"../../../components/form/ConfirmEmailAddress";
import PassportExpiryDate from "../../../components/form/PassportExpireDate";
import PassportIssueDate from "../../../components/form/PassportIssueDate";
import YearMonthDaySelector from "../../../components/form/YearMonthDaySelector";
import CustomInput from "../../../custom/CustomInput";
import CustomSelect from "../../../custom/CustomInputSelect";
import { CountryList } from "../../../lib/countrylist";


import  {  useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import EnquiryCheckbox from "../../../components/form/EnquiryCheckbox";
import { customOption } from "../../../constants/custom";





const Booking = () => {
  const [traveler, setTraveler] = useState(1);
  const methods = useForm();

  const handleAdd = () => {
    setTraveler((prevVal) => prevVal + 1);
  };

  const handleSubtract = () => {
    if (traveler > 1) {
      setTraveler((prevVal) => prevVal - 1);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data });
  };

  const options = CountryList();

  return (
    <div className="px-5 md:px-20 lg:px-28 py-5">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 pt-10">
            <div className="flex items-center gap-3 ">
              <div className="bg-[#3DB368] flex items-center justify-center h-8 w-8 rounded-full text-lg text-white ">
                1
              </div>
              <div className="font-semibold text-xl">Travelers</div>
            </div>
            <div className="flex justify-between items-center border-[1px] p-4 rounded-md">
              <div className="font-semibold text-sm">Number of Traveler</div>

              <div className="flex items-center gap-5 rounded-full border-[1px]">
                <button
                  type="button"
                  className="flex items-center justify-center border-2 border-[#CACACA] text-[#CACACA] rounded-full h-10 w-10 "
                  onClick={handleSubtract}
                >
                  -
                </button>
                <div className="">{traveler}</div>
                <button
                  type="button"
                  className="flex items-center justify-center border-2 border-red-500 text-red-500 rounded-full h-10 w-10 "
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>
            </div>
          </div>

    

          <div className="flex flex-col gap-5 pt-10">
            <div className="flex items-center gap-3 ">
              <div className="bg-[#3DB368] flex items-center justify-center h-8 w-8 rounded-full text-lg text-white ">
                2
              </div>
              <div className="font-semibold text-xl">Your Details</div>
            </div>

            <div className="flex flex-col gap-5 border-[1px] rounded-md px-5 py-10">
              <div>
                <div className="font-semibold pb-2 text-sm">
                  Full Name <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col md:flex-row gap-5 ">
                  <div className="w-full flex flex-col gap-5 md:gap-2 md:flex-row">
                    
                    <CustomInput
                      type="text"
                      placeHolder="First Name"
                      name="firstName"
                    />
                  </div>
                  <CustomInput
                    type="text"
                    placeHolder="Last Name"
                    name="lastName"
                  />
                </div>
              </div>

              <div>
                <div className="font-semibold pb-2 text-sm">
                  Email Address <span className="text-red-500">*</span>
                </div>
                <ConfirmEmailAddress />
              </div>

              <div>
                <div className="font-semibold pb-2 text-sm">
                  Date of Birth / Nationality{" "}
                  <span className="text-red-500">*</span>
                </div>
                <div className="w-full flex flex-col md:flex-row  gap-5 md:gap-5">
                  <div className="w-full md:w-1/2">
                    <YearMonthDaySelector birth_year={undefined} />
                  </div>

                  <div className="w-full md:w-1/2">
                    <CustomSelect
                      placeHolder="Select Nationality"
                      name="nationality"
                      
                      options={options}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold pb-2 text-sm">
                  Contact Number <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-5">
                  <CustomInput
                    type="text"
                    placeHolder="Mobile Number"
                    name="mobileNumber"
                    required={true}
                  />
                  <CustomSelect
                    placeHolder="Country Code"
                    name="countryCode"
                    
                    options={customOption}
                  />
                </div>
              </div>

              <div>
                <div className="font-semibold pb-2 text-sm">
                  Passport <span className="text-red-500">*</span>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-5">
                  <CustomInput
                    type="text"
                    placeHolder="Passport number"
                    name="passportNumber"
                    required={true}
                  />
                  <CustomSelect
                    placeHolder="Select place of issue"
                    name="passportPlaceOfIssue"
                    
                    options={options}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full flex flex-col ">
                  <div className="font-semibold pb-2 text-sm">
                    Passport Issue Date
                  </div>
                  <div className="w-full">
                    <PassportIssueDate />
                  </div>
                </div>

                <div className="w-full flex flex-col ">
                  <div className="font-semibold pb-2 text-sm">
                    Passport Expiration Date
                  </div>
                  <div className="w-full">
                    <PassportExpiryDate />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#3DB368] flex items-center justify-center h-8 w-8 rounded-full text-lg text-white ">
                3
              </div>
              <div className="font-semibold text-xl">Payment</div>
            </div>
          </div>

          <div className="border-[1px] p-5 mt-5 rounded-md">
            <div className="font-bold text-center text-xl md:text-2xl">
              Total Price: Rs. 1,675
            </div>
          </div>

          <div className="w-full pt-5 ">
            <EnquiryCheckbox />

            <button className="w-full py-5 px-5 text-white bg-red-400 rounded-md text-xl font-bold mt-5 uppercase">
              Confirm Booking
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Booking;