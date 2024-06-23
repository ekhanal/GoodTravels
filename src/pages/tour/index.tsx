import Image from "../../assets/images/Australia.jpg";
import TravelDeals from "../../components/home/TravelDeals";

const index = () => {
  return (
    <div>
      <div
        className="bg-cover h-[50vh] bg-no-repeat text-white font-poppins flex-col flex  justify-center "
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className=" flex  items-center flex-col gap-5   ">
          <h1 className="text-4xl font-bold text-white">Tour Package</h1>
          <div className="flex gap-3">
            <span className="">Home</span> 
            <span className="flex items-center ">&gt;&gt;</span>
            <span>Tour Packages</span>
          </div>
        </div>
      </div>
      <div>
        <TravelDeals/>
        
      </div>
    </div>
  );
};

export default index;
