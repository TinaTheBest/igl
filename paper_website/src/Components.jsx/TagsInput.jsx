// src/components/TagsInput.js
import React, { useState } from 'react';

const TagsInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
 // function to handle when the ENTER is clicked
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };
  // function to handle when the button add is clicked
  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-wrap space-x-2 max-w-[235px]">
      <div className='justify-start items-start gap-[8.89px] inline-flex'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="borderbg-white rounded-[17.78px] w-[175.11px] h-[31.11px] border border-sky-500 px-2 py-1 mb-[18px] focus:outline-none placeholder-zinc-400 text-xs leading-[14.06px]"
        placeholder="Enter the Key word here ..."
      />
       <button className="flex justify-center items-center  text-white text-leading-[14.39px] h-[31.11px] w-[51.56px] bg-sky-500 rounded-[17.78px] border border-sky-500 font-medium font-['DM Sans'] shadow-lg" onClick={handleAddTag}>
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
