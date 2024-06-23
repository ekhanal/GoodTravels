import { ExclusionData } from '../../constants/CardData';
import { InclusionData } from '../../constants/CardData';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const IncludedExcluded= () =>  {
  return (
    <div className='bg-white rounded-lg shadow-md p-5 border border-gray-300 pt-4 '>
        <h2 className='font-bold pb-4 text-xl sm:text-2xl text-start'>Whats inside the Package? </h2>
        <div className=''>
        <div className='border-t  grid grid-cols-1 sm:grid-cols-2 md:gap-4 md:px-4' >
            
            <div className=' p-6 mt-2  sm:border-r border-gray-300 '>
                <h3 className='text-lg sm:text-xl font-semibold pb-2 '>Inclusions</h3>
                <ul className=''>
                    {InclusionData.map((inclusion, index) => (
                        <li key={index} className='text-base sm:text-lg text-black'>
                            <div className='flex gap-2 items-start'>
                            <div><TiTick  className='text-yellow-600'/></div>
                            {inclusion}
                            </div>
                            </li>
                    ))}
                </ul>
            </div>
            <div className='px-8 sm:p-8 border-gray-300'>
                <h3 className='text-lg sm:text-xl font-semibold pb-2'>Exclusion</h3>
                <ul className='  '>
                    {ExclusionData.map((exclusion, index) => (
                        <li key={index} className='text-base sm:text-lg text-black'>
                            <div className='flex gap-2 items-start'>
                            <RxCross2 className='text-yellow-600' />
                            {exclusion}
                            </div>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}
export default IncludedExcluded