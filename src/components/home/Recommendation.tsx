import Maldives from "../../assets/images/Maldives.webp";
import Island from "../../assets/images/Island.webp";
import Gokyo from "../../assets/images/Gokyo.webp";
const Recommendation = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-3xl font-bold mb-8">Recommended For You</h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full h-64">
            <img
              src={Maldives}
              alt="Maldives"
              className="object-cover w-full h-full"
            />
            <div className="flex justify-center">
              <img
                src={Island}
                alt="Island"
                className="w-full h-32 object-cover"
              />
              <img
                src={Gokyo}
                alt="Gokyo"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
          <div className="w-full h-64">
            <img
              src={Maldives}
              alt="Annapurna"
              className="object-cover w-full h-full"
            />
            <div className="flex justify-center">
              <img
                src={Gokyo}
                alt="Island"
                className="w-full h-32 object-cover"
              />
              <img
                src={Island}
                alt="Gokyo"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
          <div className="w-full h-64">
            <img
              src={Island}
              alt="Maldives"
              className="object-cover w-full h-full"
            />
            <div className="flex justify-center">
              <img
                src={Gokyo}
                alt="Island"
                className="w-full h-32 object-cover"
              />
              <img
                src={Maldives}
                alt="Gokyo"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
