import Hero from "../../components/home/Hero";
import Stories from "../../components/home/Stories";
import TravelDeals from "../../components/home/TravelDeals";
import DomesticDestination from "../../components/home/DomesticDestination1";
import InternationalDestination from "../../components/home/InternationalDestination1";

const Home = () => {
  return (
    <>
      <Hero />

      <TravelDeals />
      <InternationalDestination />
      <DomesticDestination />
      <Stories />
    </>
  );
};

export default Home;
