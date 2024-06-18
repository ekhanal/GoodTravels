import HeroImage from "../../assets/images/heroimage.jpg";
import Button from "../custom/Button";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img src={HeroImage} className="h-[100vh] object-cover" alt="" />
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:pb-6 md:pb-8 sm:">
            Let the journey begin
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">Travel And Experience Amazing Destinations</p>
          <div className="flex justify-center flex-wrap pt-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            <Button name={"Flight"} className={"text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border "}  />
            <Button name={"Helicopter"} className={"text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border "} />
            <Button name={"Tour Package"} className={"text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border"} />
            <Button name={"Vehicle"}  className={"text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none border "}/>
           
          </div>

          <div className="px-20">
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
