import React, { useState } from "react";
import axios from "axios";
const SearchBar = ({ onSearch }) => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    recherchegenerale();
  };

  const recherchegenerale = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/recherche/resultat",
        { search_term: searchTerm }
      );

      console.log("cc", response);
      onSearch(response.data);
    } catch (error) {
      console.error("Error adding moderateur :", error);
    }
  };

  return (
    <div className="flex w-full h-[49.78px] gap-[17.78px] justify-between items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full h-[49.78px] px-[17.78px] py-[14.22px] bg-white rounded-[17.78px] justify-between items-center inline-flex focus:outline-none "
        placeholder="Search..."
      />
      <button
        className=" hidden sm:flex justify-center items-center sm:gap-8.889px sm:text-white sm:text-[21.333px] sm:bg-[#1B9DF0] sm:h-[49.778px] sm:w-[184px] sm:rounded-[17.778px] sm:px-[21.3px] sm:py-[14.222] font-medium font-['DM Sans'] shadow-lg"
        onClick={recherchegenerale}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
