import Maldives from "../../assets/images/Maldives.webp";
import Island from "../../assets/images/Island.webp";
import Gokyo from "../../assets/images/Gokyo.webp";
import Annapurna from "../../assets/images/Annapurna.webp";

const Recommendation = () => {
  return (
    <>
   <div className="grid grid-cols-3 gap-5 px-5">
        <div className="">
            <img src={Maldives} alt="image1"  className="object-cover"/>
            <div className="flex gap-2 justify-center">
            <img src={Island} alt="image2"  className="w-full h-32 object-cover"/>
            <img src={Gokyo} alt="image3" className="w-full h-32  object-cover"/>
            </div>
        </div>
      
        <div className="">
            <img src={Annapurna} alt="image1"  className="object-cover"/>
            <div className="flex gap-2 justify-center">
            <img src={Island} alt="image2"  className="w-full h-32 object-cover"/>
            <img src={Gokyo} alt="image3" className="w-full h-32  object-cover"/>
            </div>
        </div>
      
        <div className="">
            <img src={Gokyo} alt="image1"  className="object-cover"/>
            <div className="flex gap-2 justify-center">
            <img src={Island} alt="image2"  className="w-full h-32 object-cover"/>
            <img src={Annapurna} alt="image3" className="w-full h-32  object-cover"/>
            </div>
        </div>
      
        </div>
      
    </>
  )
}

export default Recommendation

