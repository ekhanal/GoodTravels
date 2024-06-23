import Custominputselect from "../../../custom/CustomInputSelect";

import StartDate from "../../../custom/datepicker/StartDate";
import DropDownConstant from "../../../constants/DropDownConstant";
import Button from "../../../custom/Custombutton";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { formatDate } from "../../../utils/date";
import TravelerSelect from "../../../custom/TravelerSelect";
import { useAuthContext } from "../../../hooks/contextConsumer.hook";
const OneWay = () => {
  const {travelers} = useAuthContext();
  
  const methods = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        orgin: data.orgin,
        destination: data.destination,
        departdate: formatDate(data.start_date),

        travelers:travelers,
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
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5 px-4 pt-4">
            <div className="w-full  ">
              <label htmlFor="Orgin" className="font-medium text-white text-xs">
                Orgin
              </label>

              <Custominputselect
                name={"orgin"}
                placeHolder={"Orginal Airport "}
                style=" p-10"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full  ">
              <label htmlFor="Orgin" className="font-medium text-white text-xs">
                Destination
              </label>

              <Custominputselect
                name={"destination"}
                placeHolder={"Destination Airport"}
                style=" p-10"
                options={DropDownConstant}
              />
            </div>
            <div className="w-full    ">
              <label htmlFor="Orgin" className="font-medium text-white text-xs">
                Depart Date
              </label>
              <StartDate style="bg-white py-1.5 border" />
            </div>

            <div className=" w-full  ">
              <label htmlFor="Orgin" className="font-medium text-white text-xs">
                Travelers
              </label>

              <TravelerSelect/>
            </div>
          </div>
          <div className="pt-5 sm:pt-8 px-4 sm:w-fit m-auto ">
            <Button
              title={"Search Flights"}
              type="submit"
              styles=" sm:px-20 py-2 text-white bg-red-600 rounded  "
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default OneWay;
