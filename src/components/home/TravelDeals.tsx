import { TravelData } from "../../constants/CardData";
import TravelDealCard from "../custom/TravelDealCard";
const TravelDeals = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">
          Best Travel Deals For You
        </h2>
        <TravelDealCard data={TravelData} />
      </div>
    </div>
  );
};

export default TravelDeals;
