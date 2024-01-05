import NavBar from "../../Components.jsx/navbar";
import Card from "../../Components.jsx/card";
import FilSer from "../../Components.jsx/FilSer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../../Components.jsx/SearchBar";

function UserFirstPage() {
  const location = useLocation();
  const { state } = location;
  const userId = state ? state.user_id : null;
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (searchResults) => {
    console.log("Handling search results in UserFirstPage:", searchResults);
    setSearchResults(searchResults);
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/users/get_all_data"
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <NavBar id={userId} />
      <div className="sm:mt-[84px] mt-[65px]">
        {console.log(filter)}
        <div>
          <SearchBar onSearch={handleSearchResults} />
          {/* <FilSer OnClick={() => setFilter(!filter)} /> */}
        </div>
        {console.log(filter)}
      </div>
      <div
        className={
          filter
            ? "flex flex-wrap ml-[350px] mr-[30px] gap-[12px] mt-[5px]"
            : "flex flex-wrap mx-[40px] gap-[12px] mt-[5px]"
        }
      >
        {searchResults.length > 0
          ? searchResults.map((result) => (
              <Card key={result.id} id={result.id} {...result.source} />
            ))
          : articles.map((article) => (
              <Card key={article._id} id={article._id} {...article._source} />
            ))}
      </div>
    </>
  );
}
export default UserFirstPage;
