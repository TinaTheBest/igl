import NavBar from "../../Components.jsx/navbar";
import CardFav from "../../Components.jsx/cardFav";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router";

function UserFav() {
  const location = useLocation();
  const { state } = location;
  const user_id = state ? state.user_id : null;
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/favorits/get_all_fav/${user_id}`
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles piw:", error);
    }
  };
  fetchArticles();

  return (
    <>
      <NavBar id={user_id} />
      <div className="sm:mt-[84px] mt-[65px]">
        {/*<FilSer />Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div className="flex flex-wrap mx-[40px] gap-[12px]">
        {articles.map((article) => {
          console.log("props", article.source);
          return (
            <CardFav
              key={article.id}
              id={article.id}
              {...article.source.props}
            />
          );
        })}
      </div>
    </>
  );
}
export default UserFav;
