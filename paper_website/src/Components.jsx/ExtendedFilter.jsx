// FilterBar.js
import React, { useState } from 'react';
import TagsInput from './TagsInput';

const ExtendedFilter = ({ onSearch }) => {
  const [authorTags, setAuthorTags] = useState([]);
  const [keywordTags, setKeywordTags] = useState([]);
  const [institutionTags, setInstitutionTags] = useState([]);

  const handleSearch = () => {
    // Call the onSearch prop with the current tags
    onSearch({
      authorTags,
      keywordTags,
      institutionTags,
    });
  };

  return (
    <div>
      <TagsInput
        placeholder="Enter author..."
        onAddTag={(tag) => setAuthorTags([...authorTags, tag])}
        tags={authorTags}
        onTagRemove={(tag) => setAuthorTags(authorTags.filter((t) => t !== tag))}
      />

      <div className="border-b border-gray-300 my-4"></div>

      <TagsInput
        placeholder="Enter keyword..."
        onAddTag={(tag) => setKeywordTags([...keywordTags, tag])}
        tags={keywordTags}
        onTagRemove={(tag) => setKeywordTags(keywordTags.filter((t) => t !== tag))}
      />

      <div className="border-b border-gray-300 my-4"></div>

      <TagsInput
        placeholder="Enter institution..."
        onAddTag={(tag) => setInstitutionTags([...institutionTags, tag])}
        tags={institutionTags}
        onTagRemove={(tag) => setInstitutionTags(institutionTags.filter((t) => t !== tag))}
      />

      <div className="my-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ExtendedFilter;
