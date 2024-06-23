
import { FaMinus, FaPlus } from 'react-icons/fa';

import { useAuthContext } from '../hooks/contextConsumer.hook';


interface Props{
    style:string;
}


const TravelerPopUp:React.FC<Props> = ({style}) => {

  const {travelers,setTravelers} = useAuthContext();
  /* const [travelers, setTravelers] = useState({ adult: 1, child: 0, infant: 0 }); */
   
  
    
  
    const increment = (type: string) => {
     
      if (type === "adult" ) setTravelers ({...travelers,adult:travelers.adult + 1});
      if (type === "child") setTravelers({...travelers, child :travelers.child + 1});
      if (type === "infant") setTravelers({...travelers,infant:travelers.infant + 1});
    };
  
    const decrement = (type: string) => {
      if (type === "adult" && travelers.adult > 1) setTravelers ({...travelers,adult:travelers.adult - 1});
      if (type === "child" && travelers.child > 0) setTravelers({...travelers, child :travelers.child - 1});
      if (type === "infant" && travelers.infant > 0) setTravelers({...travelers,infant:travelers.infant - 1});
    };
    
    

  return (
    
    <div >
           <div className={`flex flex-col gap-5  border rounded-md bg-white text-black ${style}`}>
        <div className="flex justify-between items-center gap-2 pt-2 px-2">
         <span className='border  px-2 py-2'> <FaMinus onClick={() => decrement("adult")} className="text-[#01548d]"/> </span>{travelers.adult} Adult {" "}
          <span className='border px-2 py-2'><FaPlus onClick={() => increment("adult")}  className="text-[#01548d]"/></span>
       
        </div>
        <div className="flex justify-between items-center px-2 gap-2">
        <span className='border px-2 py-2'>  <FaMinus onClick={() => decrement("child")} className="text-[#01548d]" /> </span>{travelers.child} Child{" "}
        <span className='border px-2 py-2'>  <FaPlus onClick={() => increment("child")}className="text-[#01548d]" /></span>
        </div>
        <div className="flex justify-between items-center px-2 gap-2 pb-2">
        <span className='border px-2 py-2'> <FaMinus onClick={() => decrement("infant")}className="text-[#01548d]" /></span> {travelers.infant} Infant{" "}
        <span className='border px-2 py-2'>  <FaPlus onClick={() => increment("infant")} className="text-[#01548d]"/></span>
        </div>
      </div>
      
    </div>
    
  )
}

export default TravelerPopUp


