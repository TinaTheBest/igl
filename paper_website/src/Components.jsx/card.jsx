import React, { useEffect, useState } from "react";
import heart from "../assets/heart.svg";
import heartSelected from "../assets/heartSelected.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
/**
 * Composant représentant une carte d'article.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'identifiant de l'article.
 * @param {string} props.title - Le titre de l'article.
 * @param {string} props.publication_date - La date de publication de l'article.
 * @param {string} props.absract - Le résumé de l'article.
 * @returns {JSX.Element} - Élément JSX représentant la carte d'article.
 */
/**
   * Fonction pour vérifier si l'article est marqué comme favori.
   * @async
   * @function
   */
function Card(props) {
  const location = useLocation();
  // Accédez à l'état de localisation qui contient l'article
  const { state } = location;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const userId = state ? state.user_id : null;
  const checkIsFavorite = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/users/isfav/${userId}/${props.id}`
      );
      setIsFavorite(response.data.isfav);
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };

  useEffect(() => {
    if (userId != null) {
      checkIsFavorite();
    }
  }, []);
  /**
   * Fonction pour ajouter l'article aux favoris.
   * @async
   * @function
   */

  const addFavorite = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/favorits/AjouterFavorit/${userId}/${props.id}`,
        {
          props,
        }
      );
      setIsFavorite(true);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };
  /**
   * Fonction pour supprimer l'article des favoris.
   * @async
   * @function
   */

  const deleteFavorite = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/favorits/delete_favorit/${userId}/${props.id}`
      );
      setIsFavorite(false);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  return (
    <>
      {/* <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          }
        `}
      </style> */}
      <div id="myUniqueElement" className="bg-white rounded-[35px]  mx-[10px] w-full sm:mx-[0px] items-center ">
        <div className="flex-col items-center justify-between p-[25px] h-[100%]">
          <div className="flex flex-col">
            <div className="pb-[11px] font-bold sm:text-[16px] text-[16px] flex-shrink-0" style={{ height: '4em', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.5em' }}>
              {props.title}
            </div>
            <div className="sm:text-[10.66px] text-[12px] text-[#655F5F] mb-[11px] text-right">
              Published in {props.publication_date}
            </div>
            <div className="pb-[11px] sm:text-[12px] text-[12px]">
              {props.absract}
            </div>
          </div>
          <div className="w-full bg-[#E7E7EE] h-[0.889px] mb-[11px]"></div>
          <div
            className="flex justify-between w-full"
            style={{ marginTop: 'auto' }}
          >
            <div
              className="flex text-[#1B9DF0] font-bold sm:text-[14.22px] text-[13px] border-[1px] border-[#1B9DF0] sm:w-[160px] rounded-xl px-4 py-2"
              onClick={() =>
                navigate("/UserFirstPage/UserDetails/" + props.id, {
                  state: { article: props },
                })
              }
            >
              See More details
            </div>
            <img
              src={isFavorite ? heartSelected : heart}
              alt="Heart"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (userId != null) {
                  isFavorite ? deleteFavorite() : addFavorite();
                } else {
                  console.error("User ID is null");
                }
              }}
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
