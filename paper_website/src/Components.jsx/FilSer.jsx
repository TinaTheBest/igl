import React , {useState} from 'react';
import ExtendedFilter from './ExtendedFilter';
//import FilterButton from "./Components.jsx/Filter"; 
import FilterButton from './Filter';
//import TagsInput from './TagsInput';
import SearchBar from './SearchBar';

function FilSer() {
    const [isExtendedFilterVisible, setExtendedFilterVisibility] = useState(false);

  const handleSearch = (tags) => {
    // Implement your search logic here using the 'tags' object
    console.log('Searching with tags:', tags);
  };

  const toggleExtendedFilter = () => {
    setExtendedFilterVisibility(!isExtendedFilterVisible);
  };
  return (
    <div className="flex items-start sm:space-x-4 w-full h-[56.44px] sm:px-[40.8px] px-[20.8px] justify-between gap-[33px] ">
    <div className="flex items-center justify-center  mb-4 sm:mb-0">
      {isExtendedFilterVisible ? (
        <ExtendedFilter onSearch={handleSearch} />
      ) : (
        <FilterButton onClick={toggleExtendedFilter} />
      )}
    </div>
    <SearchBar />
  </div>
  )
}

export default FilSer