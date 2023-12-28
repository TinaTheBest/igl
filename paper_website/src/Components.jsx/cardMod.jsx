// CardMod.jsx
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardMod(props) {
  let navigate = useNavigate();
  {
    /*const {
    id,
    title,
    authors,
    institutions,
    keywords,
    abstract,
    references,
    publication_date,
    full_text,
    pdf_url,
  } = props;*/
  }
  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          }
        `}
      </style>
      <div className="font-dm-sans">
        <div className="bg-white rounded-[20px] sm:mx-[40.8px] mx-[10px] mb-[15px] shadow-lg">
          <div className="flex justify-between items-center gap-[37.33px] p-[20px]">
            <div>
              {console.log(props)}

              <div
                className="font-semibold text-[#005BC5] sm:text-[20px] fond-bold text-[13px]"
                onClick={() =>
                  navigate("/ModeratorFirstPage/ModeratorDetails/" + props.id, {
                    state: { article: props },
                  })
                }
              >
                {props.title}
              </div>

              <div className="sm:text-[13px] text-[10px]">{props.abstract}</div>
            </div>
            <button
              className="hidden sm:flex sm:justify-center sm:items-center sm:rounded-[14.25px] sm:border-[1px] sm:py-[9px] sm:px-[25px] sm:border-[#1B9DF0] sm:text-[#1B9DF0] sm:text-[16px] sm:font-bold"
              onClick={() =>
                navigate("/ModeratorFirstPage/ModeratorDetails/" + props.id, {
                  state: { article: props },
                })
              }
            >
              Review and validate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMod;
