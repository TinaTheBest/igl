import NavBar from "../../Components.jsx/navbar";
import CardFav from "../../Components.jsx/cardFav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
/**
 * Page pour afficher les articles favoris d'un utilisateur.
 * @component
 */

function UserFav() {
  const location = useLocation();
  const { state } = location;
  const user_id = state ? state.user_id : null;
  const [articles, setArticles] = useState([]);
  // Fonction pour récupérer les articles favoris de l'utilisateur depuis le serveur

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
  // Appeler la fonction fetchArticles lorsque le composant est rendu

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <NavBar id={user_id} />
      <div className="sm:mt-[84px] mt-[65px]">
        {/*<FilSer />Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-[15px] mx-11 pb-[15px]">
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
