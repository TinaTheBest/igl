import "./App.css";
import NavBar from "./Components.jsx/navbar";
import CardMod from "./Components.jsx/cardMod";
import Card from "./Components.jsx/card";
import Details from "./Components.jsx/details";
import TagsInput from "./Components.jsx/TagsInput";
import ExtendedFilter from "./Components.jsx/ExtendedFilter";

function App() {
  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0 relative">
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