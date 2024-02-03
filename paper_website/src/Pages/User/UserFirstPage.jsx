import NavBar from "../../Components.jsx/navbar";
import Card from "../../Components.jsx/card";
import FilSer from "../../Components.jsx/FilSer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../../Components.jsx/SearchBar";
import ExtendedFilter from "../../Components.jsx/ExtendedFilter";
import FilterButton from "../../Components.jsx/Filter";

function UserFirstPage() {
  const location = useLocation();
  const { state } = location;
  const userId = state ? state.user_id : null;
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setfilterResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handlefilterResults = (filterResults) => {
    console.log("Handling filter results in UserFirstPage:", filterResults);
    setfilterResults(filterResults);
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/users/get_all_data");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem(userId); // Récupérer le terme de recherche spécifique à l'utilisateur
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(userId, searchTerm); // Stocker le terme de recherche spécifique à l'utilisateur
  }, [searchTerm, userId]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    localStorage.setItem('searchResults', JSON.stringify(results));
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const [isExtendedFilterVisible, setExtendedFilterVisibility] = useState(false);

  const toggleExtendedFilter = () => {
    setfilterResults([]);
    setExtendedFilterVisibility(!isExtendedFilterVisible);
  };

  return (
    <>
      <NavBar id={userId} />
      <div className="sm:mt-[84px] mt-[65px]">
        <div className="flex flex-col sm:flex-row items-start justify-center mb-4 mx-11 sm:mb-0">
          {isExtendedFilterVisible ? (
            <ExtendedFilter
              onfilter={handlefilterResults}
              // onSearch={handleSearch}
              onHide={() => {
                toggleExtendedFilter();
                setFilter(true);
              }}
            />
          ) : (
            <FilterButton
              onClick={() => {
                toggleExtendedFilter();
                setFilter(false);
              }}
            />
          )}
          {filter &&
            <SearchBar
              searchTerm={searchTerm}
              onSearch={handleSearchResults}
              onSearchChange={handleSearchChange}
            />}
          {!filter && (
            <div className="w-full">
              <SearchBar
                searchTerm={searchTerm}
                onSearch={handleSearchResults}
                onSearchChange={handleSearchChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-[15px] ml-3">
                {filterResults.length > 0
                  ? filterResults.map((result) => (
                    <Card
                      key={result._id}
                      id={result._id}
                      {...result._source}
                    />
                  ))
                  : searchResults.length > 0
                    ? searchResults.map((article) => (
                      <Card
                        key={article.id}
                        id={article.id}
                        {...article.source}
                      />
                    ))
                    : articles.map((article) => (
                      <Card
                        key={article._id}
                        id={article._id}
                        {...article._source}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
        {filter && (
          <div>
            <div
              className={
                filter
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-[15px] mx-11"
                  : "hidden"
              }
            >
              {searchResults.length > 0 ? (
                // Check if there are search results
                searchResults.map((result) => (
                  <Card key={result.id} id={result.id} {...result.source} />
                ))
              ) : (
                searchTerm.length === 0 ? (
                  // Render articles if searchTerm is empty
                  articles.map((article) => (
                    <Card
                      key={article._id}
                      id={article._id}
                      {...article._source}
                    />
                  ))
                ) : null // Render nothing if searchTerm is not empty
              )}


            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default UserFirstPage;
