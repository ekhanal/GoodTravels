import DomesticDestinations from "../../components/home/DomesticDestination"
import Hero from "../../components/home/Hero"
import InternationalDestination from "../../components/home/InternationalDestination"
import Recommendation from "../../components/home/Recommendation"
import Slider from "../../components/home/Slider"
import Stories from "../../components/home/Stories"


const Home = () => {
  return (
    <>
  
    <Hero />
    <Slider />
    <DomesticDestinations />
    <InternationalDestination />
    <Recommendation />
    <Stories />
    </>
  )
}

export default Home
