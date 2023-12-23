import React from 'react'
import { HiAdjustments } from "react-icons/hi";


function Filter() {
  return (
    <div className='w-full'>
        <button className='w-full'>
            
            <div className=' px-[17.78px] py-[10.22px] rounded-[17.8px] bg-[#ffffff] sm:w-[296px] h-[49.78px] shadow '>
                <div className=' flex justify-between items-center  '>
                  <div className=" text-zinc-900 text-[21.33px] font-bold font-['DM Sans']">Filter</div>
                  <HiAdjustments size={26} />
                </div>
            </div>
        </button>
        

    </div>
  )
}

export default Filter