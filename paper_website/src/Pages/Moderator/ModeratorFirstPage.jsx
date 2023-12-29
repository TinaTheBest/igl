import React, { useState } from "react";
import NavBarMod from "../../Components.jsx/navbarMod";
import CardMod from "../../Components.jsx/cardMod";
import axios from "axios";

function ModeratorFirstPage() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/ModArticles/get_all_data"
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Call the fetchArticles function when the component renders
  fetchArticles();

  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
        {articles.map((article) => (
          <CardMod key={article.id} {...article.source} />
        ))}
        <CardMod
          id="yusra"
          title="yusra"
          authors="yusra"
          institutions="yusra"
          keywords="yusra"
          abstract="yusra"
          references="yusra"
          publication_date="yusra"
          full_text="yusra"
          pdf_url="yusra"
        />
      </div>
    </>
  );
}

export default ModeratorFirstPage;
