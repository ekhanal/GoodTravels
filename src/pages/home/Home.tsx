// import DomesticDestinations from "../../components/home/DomesticDestination"
import Hero from "../../components/home/Hero"
// import InternationalDestination from "../../components/home/InternationalDestination"
// import Recommendation from "../../components/home/Recommendation"
// import Slider from "../../components/home/Slider"
import Stories from "../../components/home/Stories"

import DomesticDestination1 from "../../components/home/DomesticDestination1"
import InternationalDestination1 from "../../components/home/InternationalDestination1"
import TravelDeals from "../../components/home/TravelDeals"


// import Display from "../../components/new/Display"






const Home = () => {
  return (
    <>
    <Hero />
    {/* <Slider /> */}
    <TravelDeals />
    <InternationalDestination1 />
    <DomesticDestination1 />
    <Stories />
    
  
    {/* <Hero />
    <Slider />
    <DomesticDestinations />
    <InternationalDestination />
    <Recommendation />
    <Stories />
   <Display/> */}

    </>
  )
}

export default Home
