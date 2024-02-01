// FilterBar.js
import React, { useState } from 'react';
import TagsInput from './TagsInput';
import { HiOutlineX } from "react-icons/hi";




const ExtendedFilter = ({ onSearch , onHide }) => { 
  const [authorTags, setAuthorTags] = useState([]);
  const [keywordTags, setKeywordTags] = useState([]);
  const [institutionTags, setInstitutionTags] = useState([]);
  const [sortingOption, setSortingOption] = useState('A-Z'); // Default sorting option
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  
  const handleSearch = () => {
    // Call the onSearch prop with the current tags
    onSearch({
      authorTags,
      keywordTags,
      institutionTags,
    });
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };
  
  const resetAllInputs = () => {
    setAuthorTags([]);
    setKeywordTags([]);
    setInstitutionTags([]);
    setSortingOption('A-Z');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className='w-[296px] px-[15.44px] py-[10.22px] bg-white rounded-[17.8px] flex-col justify-start items-start gap-[17.78px] inline-flex mr-2 ' > 
      <div className="w-[270.56px] px-1  h-7 justify-between  flex">
        <div className=" text-zinc-900 text-[21.33px] font-bold font-['DM Sans']">Filter</div>
        <button onClick={resetAllInputs} className="text-blue-500 text-sm font-medium font-['DM Sans'] underline">Reset All</button>
        <button onClick={onHide} className="text-black text-sm font-medium font-['DM Sans'] focus:outline-none">
        <HiOutlineX size={26} />
        </button>
       
      </div>
      <div className="border-b my-2 w-[270.56px] h-[0px] border border-gray-200"></div>
       {/* <RadioSort/> */}
       <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">Sort By</div>
       <div className='flex gap-[21.33px]'>
      <div className="flex items-center">
        <input
          type="radio"
          id="sortAZ"
          name="sorting"
          value="A-Z"
          checked={sortingOption === 'A-Z'}
          onChange={() => handleSortingChange('A-Z')}
        />
        <label htmlFor="sortAZ" className="ml-2">A-Z</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="sortRecents"
          name="sorting"
          value="Recents"
          checked={sortingOption === 'Recents'}
          onChange={() => handleSortingChange('Recents')}
        />
        <label htmlFor="sortRecents" className="ml-2">Recents</label>
      </div>
      </div>
      <div className="border-b my-2 w-[270.56px] h-[0px] border border-gray-200"></div>

      <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">Key words</div>
      <TagsInput
        placeholder="Enter author..."
        onAddTag={(tag) => setAuthorTags([...authorTags, tag])}
        tags={authorTags}
        onTagRemove={(tag) => setAuthorTags(authorTags.filter((t) => t !== tag))}
      />

      <div className="border-b my-2 w-[270.56px] h-[0px] border border-gray-200"></div>
      <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">Authors</div>
      <TagsInput
        placeholder="Enter keyword..."
        onAddTag={(tag) => setKeywordTags([...keywordTags, tag])}
        tags={keywordTags}
        onTagRemove={(tag) => setKeywordTags(keywordTags.filter((t) => t !== tag))}
      />

      <div className="border-b my-2 w-[270.56px] h-[0px] border border-gray-200"></div>
      <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">Institutions</div>
      <TagsInput
        placeholder="Enter institution..."
        onAddTag={(tag) => setInstitutionTags([...institutionTags, tag])}
        tags={institutionTags}
        onTagRemove={(tag) => setInstitutionTags(institutionTags.filter((t) => t !== tag))}
      />

      <div className="border-b my-2 w-[270.56px] h-[0px] border border-gray-200"></div>
       {/* Date Inputs */}
       <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">Start Date</div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-[270.56px] border border-gray-200 rounded-[10.67px] px-3 py-2"
      />

      <div className="w-[270.56px] text-zinc-900 text-lg font-bold font-['DM Sans']">End Date</div>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-[270.56px] border border-gray-200 rounded-[10.67px] px-3 py-2"
      />

      

      <div className="my-4 ml-auto flex">
        <button
          className="bg-[#1B9DF0] w-[136.89px] text-white px-4 py-2 rounded-[17.778px] hover:bg-blue-700 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ExtendedFilter;
