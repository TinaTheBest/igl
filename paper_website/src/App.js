import "./App.css";
import NavBar from "./Components.jsx/navbar";
import CardMod from "./Components.jsx/cardMod";
import Details from "./Components.jsx/details";
import SearchBar from "./Components.jsx/SearchBar"; 
import FilterButton from "./Components.jsx/Filter"; 
import FilterBar from "./Components.jsx/FilterBar";
import TagsInput from "./Components.jsx/TagsInput";
import ExtendedFilter from "./Components.jsx/ExtendedFilter";

function App() {
  const handleSearch = (tags) => {
    // Implement your search logic here using the 'tags' object
    console.log('Searching with tags:', tags);
  };
  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0">
      <div id="root">
        <NavBar />
        <div className="sm:flex sm:space-x-4 w-full h-[56.44px] sm:px-[40.8px] px-[20.8px] justify-between gap-[33px] items-center ">
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            <FilterButton />
          </div>
            <SearchBar />
           
        
        </div>
        {/* Use the FilterBar component and pass the handleSearch function as a prop */}
         <ExtendedFilter onSearch={handleSearch} />
        <TagsInput />
      </div>
    </div>
  );
}

export default App;

