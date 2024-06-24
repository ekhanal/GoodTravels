import { useGetAllDeals } from "../../hooks/topDeals.hook";
import CarouselDeals from "../carasol/CarasolDeals";
// import TravelDealCard from "../custom/TravelDealCard";

const TravelDeals = () => {
  const { data: allPackages } = useGetAllDeals();
  const handleMoveDetails = (id: string) => {
    console.log(id);
  };
  return (
    <CarouselDeals
      data={allPackages}
      title="Best Travel Deals For You All Packages"
      handleMoveViewDetails={handleMoveDetails}
    />
  );
};

export default TravelDeals;
