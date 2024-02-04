import React, { useEffect, useState } from 'react';
import axios from "axios";
/**
 * Composant de la barre de recherche.
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.searchTerm - Terme de recherche actuel.
 * @param {function} props.onSearch - Fonction de gestion des résultats de recherche.
 * @param {function} props.onSearchChange - Fonction de gestion des changements de terme de recherche.
 * @returns {JSX.Element} Composant de la barre de recherche.
 */
const SearchBar = ({ searchTerm, onSearch, onSearchChange }) => {
 /**
   * Fonction pour gérer les changements de recherche.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement de saisie.
   */

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;

    // Notify parent component of search term change
    onSearchChange(newSearchTerm);
  };

   /**
   * Fonction pour gérer la recherche lorsque la touche "Entrée" est pressée.
   * @param {React.KeyboardEvent<HTMLInputElement>} e - Événement de pression de touche.
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      recherchegenerale();
    }
  };
  /**
   * Fonction pour effectuer une recherche générale.
   */
  const recherchegenerale = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/recherche/resultat",
        { "search_term": searchTerm }
      );

      onSearch(response.data);

    } catch (error) {
      console.error("Error fla recherche :", error);
    }
  };

  useEffect(() => {
    recherchegenerale();
  });

  return (
    <div className="flex w-full h-[49.78px] gap-[1px] justify-between items-center space-x-2 pl-[10px]">
      <input
        id="searchbar"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        className="w-full h-[49.78px] px-[17.78px] py-[14.22px] bg-white rounded-[17.78px] justify-between items-center inline-flex focus:outline-none shadow-lg"
        placeholder="Search..."
      />
      <button className=" hidden sm:flex justify-center items-center sm:gap-8.889px sm:text-white sm:text-[21.333px] sm:bg-[#1B9DF0] sm:h-[47.778px] sm:w-[184px] sm:rounded-[17.778px] sm:px-[21.3px] sm:py-[14.222] font-medium font-['DM Sans'] shadow-lg"
        onClick={recherchegenerale}
      >
        Search
      </button>
    </div>


  );
};

export default SearchBar;
