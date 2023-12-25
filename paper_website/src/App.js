import React, { useState } from 'react';
import "./App.css";
import NavBar from "./Components.jsx/navbar";
import SearchBar from "./Components.jsx/SearchBar"; 
import FilterButton from "./Components.jsx/Filter"; 
import TagsInput from "./Components.jsx/TagsInput";
import ExtendedFilter from "./Components.jsx/ExtendedFilter";

function App() {
  const [isExtendedFilterVisible, setExtendedFilterVisibility] = useState(false);

  const handleSearch = (tags) => {
    // Implement your search logic here using the 'tags' object
    console.log('Searching with tags:', tags);
  };

  const toggleExtendedFilter = () => {
    setExtendedFilterVisibility(!isExtendedFilterVisible);
  };

  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0">
      <div id="root">
        <NavBar />
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
      </div>
    </div>
  );
}

export default App;
