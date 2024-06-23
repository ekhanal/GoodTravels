
import HeroImage from "../../assets/images/Bangkok.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="relative">
        <img src={HeroImage} alt="Hero" className="w-full h-[50vh] object-cover"  />
        <div className="absolute px-20 bottom-20 text-white space-y-2">
            <p className="text-xl px-2">Let's Travel Together,</p>
            <h1 className="text-5xl font-bold ">About Us</h1>

        </div>
        <div>
            
        </div>
      </div>
    </>
  )
}

export default AboutUs
