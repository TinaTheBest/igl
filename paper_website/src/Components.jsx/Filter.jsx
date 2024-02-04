import React from 'react'
import { HiAdjustments } from "react-icons/hi";
/**
 * Bouton de filtre.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onClick - Gère le clic sur le bouton.
 * @returns {JSX.Element} - Élément JSX représentant le bouton de filtre.
 */

const FilterButton = ({ onClick }) => {
  return (
    <div className='mr-2'>
        <button onClick={onClick} >
            
            <div className=' px-[17.78px] py-[10.22px] rounded-[17.8px] bg-[#ffffff] w-[296px]   h-[49.78px] shadow sm:my-0 my-4  '>
                <div className=' flex justify-between  items-center  '>
                  <div className=" text-zinc-900 text-[21.33px] font-bold font-['DM Sans']">Filter</div>
                  <HiAdjustments size={26} />
                </div>
            </div>
        </button>
        

    </div>
  )
}

export default FilterButton
