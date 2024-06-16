import Button from "../custom/Button";

import Dropdown from "../custom/Dropdown";
const Form = () => {
  return (
    <>
    <div className="bg-blue-500 ">
        <div>
        <div className="flex space-x-2  p-5">
            <Button name={"One way"} className={"rounded focus:outline-none border p-2 text-gray-50"}  />
            <Button name={"Two way"} className={"rounded focus:outline-none border p-2"} />
        </div>
        <div>
          <div className="flex flex-col space-x-2 p-5 ">
            <div>
          <Button name={"Origin Airport "} className={"rounded focus:outline-none border p-2 text-gray-50"}  />
          </div>
          <div className=" flex flex-col">
          
          <Dropdown />
          </div>
          
          </div>
        </div>
        <div>
          button
        </div>
        </div>
    </div>
    
      
    </>
  )
}

export default Form
