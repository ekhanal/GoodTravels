import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";

type FormField = {
    name: string;
    number: string;
    email: string;
    message: string;
  };
const ContactForm = () => {
    const { register, handleSubmit } = useForm<FormField>();
    const onSubmit: SubmitHandler<FormField> = (data) => {
      console.log(data);
    };
  return (
    <div>
           <div className="bg-white p-6 rounded-xl w-full lg:w-[500px] shadow-lg  border border-gray-300  top-0 lg:absolute right-16  lg:top-[60%] ">
          <h1 className="text-blue-600 text-xl font-bold pb-4">
            Send a message
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0  md:space-x-4">
              <input
                {...register("name")}
                type="text"
                placeholder="Your name*"
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              />
              <input
                {...register("number")}
                type="text"
                placeholder="Phone number"
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="Your email*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            ></textarea>
            <div className="flex items-center rounded-2xl bg-blue-500 w-fit px-2 mt-4 md:mt-0">
              <button
                type="submit"
                className="text-white p-2 hover:bg-blue-600"
              >
                Submit
              </button>
              <FaArrowRight className="text-white ml-2" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default ContactForm
