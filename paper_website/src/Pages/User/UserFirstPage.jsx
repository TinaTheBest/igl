import NavBar from "../../Components.jsx/navbar";
import Card from "../../Components.jsx/card";
import FilSer from "../../Components.jsx/FilSer";
import axios from "axios";
import { useState } from "react";
function UserFirstPage() {
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
      <NavBar />

      <div className="sm:mt-[84px] mt-[65px]">
        <FilSer />
        {/*<FilSer />Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div className="flex flex-wrap mx-[10px] gap-[15px]">
        {articles.map((article) => (
          <Card key={article.id} {...article.source} />
        ))}

        <Card
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
        <Card
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
        <Card
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
        <Card
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
        <Card
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
        <Card
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
export default UserFirstPage;
