import CardSection from "../custom/CardSection";
import { StoriesData } from "../../constants/CardData"
const Stories = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl font-bold mb-8">Stories,tips, and guides</h1>
      <div>
        <CardSection data={StoriesData} />
      </div>


      </div>
      
    </>
  )
}

export default Stories
