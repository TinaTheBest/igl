import NavBar from "../../Components.jsx/navbar";
import CardFav from "../../Components.jsx/cardFav";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function UserFav() {
  const location = useLocation();

  // Accédez à l'état de localisation qui contient l'article
  const { state } = location;
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/Favorit/get_all_fav/${state.user_id}`
      );
      setArticles(response.data);
      console.log(articles)
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  fetchArticles();

  return (
    <>
      <NavBar />

      <div className="sm:mt-[84px] mt-[65px]">
        {/*<FilSer />Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div className="flex flex-wrap mx-[10px] gap-[15px]">
        {articles.map((article) => (
          <CardFav key={article._id} id={article._id} {...article.source} />
        ))}
      </div>
    </>
  );
}
export default UserFav;
