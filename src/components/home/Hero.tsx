import HeroImage from "../../assets/images/heroimage.jpg";
import FormArea from "../Form/FormArea";
import Button from "../custom/Button";


const Hero = () => {
  return (
    <>
    {/*Giving background image in div so that it get extended when form size is expanded */}
      <div
        className="bg-cover h-fit bg-no-repeat text-white font-poppins flex-col flex  justify-center relative"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
          <div className="text-center pt-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:pb-6 md:pb-8 sm:">
            Let the journey begin
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">Travel And Experience Amazing Destinations</p>
       
           <div className="flex justify-center">
          <div className="max-w-7xl text-start px-5 py-5 lg:px-8  w-full  ">
         
           <FormArea/>
          </div>
          </div>
      </div>
      <div>




          <div className="px-20">
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


/* 
<div className="">
        <div className="relative h-[120vh] sm:h-screen">
        <img src={HeroImage} className=" object-cover w-full sm:h-screen h-[120vh]" alt="" />
        </div>
        <div className="absolute lg:top-[55%] sm:top-[60%] top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:pb-6 md:pb-8 sm:">
            Let the journey begin
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">Travel And Experience Amazing Destinations</p>
          <div className=" xl:px-6 pt-5 sm:pt-0 md:pt-8 ">
         
           <FormArea/>
          </div>

          <div className="px-20">
        
          </div>
        </div>
      </div>


*/