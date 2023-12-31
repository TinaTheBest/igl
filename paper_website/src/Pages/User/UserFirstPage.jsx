import NavBar from "../../Components.jsx/navbar";
import Card from "../../Components.jsx/card";
import FilSer from "../../Components.jsx/FilSer";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function UserFirstPage() {
  const location = useLocation();
  const { state } = location;
  const userId = state ? state.user_id : null;
  const [articles, setArticles] = useState([]);
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

  fetchArticles();

  return (
    <>
      <NavBar id={userId} />
      <div className="sm:mt-[84px] mt-[65px]">
        <FilSer />
        {/*<FilSer />Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div className="flex flex-wrap mx-[10px] gap-[15px]">
        {articles.map((article) => (
          <Card key={article._id} id={article._id} {...article._source} />
        ))}
      </div>
    </>
  );
}
export default UserFirstPage;
