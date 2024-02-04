// src/components/TagsInput.js
import React, { useState, useEffect } from 'react';
/**
 * Composant pour la saisie et la gestion des tags.
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onAddTag - La fonction appelée lorsqu'un nouveau tag est ajouté.
 * @param {Function} props.onTagRemove - La fonction appelée lorsqu'un tag est supprimé.
 * @returns {JSX.Element} Composant TagsInput.
 */
const TagsInput = ({ onAddTag,onTagRemove }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
/**
   * Gère le changement de la valeur de l'entrée.
   * @param {React.ChangeEvent<HTMLInputElement>} e - L'événement de changement.
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
 /**
   * Gère l'appui sur la touche Enter dans l'entrée pour ajouter un nouveau tag.
   * @param {React.KeyboardEvent<HTMLInputElement>} e - L'événement clavier.
   */
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
      setInputValue('');
    }
  };
 /**
   * Ajoute un tag en utilisant la valeur actuelle de l'entrée.
   */
  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      onAddTag(inputValue.trim()); // Pass the newly added tag to the parent component
      setTags((prevTags) => [...prevTags, inputValue.trim()]); // Update the tags state in the component
      setInputValue(''); // Clear the input value
    }
  };
    /**
   * Gère la suppression d'un tag.
   * @param {string} tag - Le tag à supprimer.
   */
  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags); // Update local state in TagsInput component
    onTagRemove(tag); // Call onTagRemove function to remove tag from parent component
  };
  
  /**
   * Effet secondaire pour afficher les tags dans la console à chaque changement.
   */
  useEffect(() => {
    console.log("Tags state:", tags);
  }, [tags]);

  return (
    <div className="flex flex-wrap gap-2 max-w-[235px]">
      <div className='justify-start items-start gap-[8.89px] inline-flex'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="borderbg-white rounded-[17.78px] w-[175.11px] h-[31.11px] border border-sky-500 px-2 py-1 mb-[18px] focus:outline-none placeholder-zinc-400 text-xs leading-[14.06px]"
        placeholder="Enter the Key word here ..."
      />
       <button className="flex justify-center items-center  text-white text-leading-[10.39px] h-[31.11px] w-[51.56px] bg-sky-500 rounded-[17.78px] border border-sky-500 font-['DM Sans'] shadow-lg" onClick={handleAddTag}>
        Add
      </button>
      </div>
      {tags.map((tag) => (
        <div key={tag} className="flex items-center border border-sky-500 text-sky-500 px-2 py-1 rounded-full space-x-2 mb-[6px]">
          <span>{tag}</span>
          <button
            type="button"
            className="text-sky-500  font-bold cursor-pointer"
            onClick={() => handleTagRemove(tag)}
          >
            &times;
          </button>
        </div>
      ))}
      
    </div>
  );
};

export default TagsInput;
