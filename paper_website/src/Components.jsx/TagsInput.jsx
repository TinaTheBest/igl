// src/components/TagsInput.js
import React, { useState } from 'react';

const TagsInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-wrap space-x-2">
      {tags.map((tag) => (
        <div key={tag} className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full space-x-2">
          <span>{tag}</span>
          <button
            type="button"
            className="text-white font-bold cursor-pointer"
            onClick={() => handleTagRemove(tag)}
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="border border-gray-300 px-2 py-1 rounded"
        placeholder="Add tags..."
      />
    </div>
  );
};

export default TagsInput;
