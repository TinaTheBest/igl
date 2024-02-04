import React, { useState } from 'react';
/**
 * Composant représentant les informations des modérateurs.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant les informations des modérateurs.
 */
function ModerInfos() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 bg-black">
        {/* First person */}
        
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">Bessie Cooper</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">michael.mitc@me.com</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">2349034526771</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">0002</div>
        </div>
        
        {/* Second person */}
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">Albert Flores</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">alma.lawson@we.com</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">2349034526771</div>
        </div>
        <div className='flex flex-col bg-white rounded-[13.05px] p-[9px]'>
          <div className="text-black text-sm font-normal font-['Poppins'] tracking-tight">0002</div>
        </div>

        {/* Repeat for other persons */}
      </div>
    </div>
  );
}

export default ModerInfos
