import CardSection from "../custom/CardSection";
import { StoriesData } from "../../constants/CardData"
const Stories = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:py-16 mt-4">
      <h1 className="text-3xl font-bold mb-8">Stories,Tips, And Guides</h1>
      <div>
        <CardSection data={StoriesData} />
      </div>


      </div>
      
    </>
  )
}

export default Stories
