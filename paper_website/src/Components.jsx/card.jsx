import React, { useState } from "react";
import heart from "../assets/heart.svg";
import heartSelected from "../assets/heartSelected.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card(props) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(true);

  /* const checkIsFavorite = async (articleId,userId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/users/isfav/${userId}/${articleId}`
      );
      setIsFavorite(response.data.isFavorite);
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };*/

  const addFavorite = async (articleId) => {
    try {
      await axios.post("http://127.0.0.1:5000/favorits/AjouterFavorit", {
        articleId,
      });
      setIsFavorite(true);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const deleteFavorite = async (articleId) => {
    try {
      setIsFavorite(false);
      console.log("Favorite deleted");
      await axios.post(
        `http://127.0.0.1:5000/favorits/delete_favorit/${articleId}`,
        {
          articleId,
        }
      );
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  // Appeler checkIsFavorite lors de l'affichage initial du composant
  // checkIsFavorite(props.id);

  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          }
        `}
      </style>
      <div className="bg-white rounded-[35px] sm:w-[296px] mx-[10px] w-full sm:mx-[0px] items-center font-dm-sans">
        <div className="flex-col items-center p-[25px]">
          <div className="pb-[11px] font-bold sm:text-[16px] text-[16px]">
            {props.title}
          </div>
          <div className="sm:text-[10.66px] text-[12px] text-[#655F5F] mb-[11px] text-right">
            Published in {props.publication_date}
          </div>
          <div className="pb-[11px] sm:text-[12px] text-[12px]">
            {props.absract}
          </div>
          <div className="w-full bg-[#E7E7EE] h-[0.889px] mb-[11px]"></div>
          <div className="flex justify-between">
            <div
              className="flex text-[#1B9DF0] font-bold sm:text-[14.22px] text-[13px] border-[1px] border-[#1B9DF0] w-[160px] rounded-xl px-4 py-2"
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
              onClick={() =>
                isFavorite ? deleteFavorite(props.id) : addFavorite(props.id)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
