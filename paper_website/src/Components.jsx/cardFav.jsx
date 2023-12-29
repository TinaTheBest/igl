import heart from "../assets/heart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CardMod(props) {
  let navigate = useNavigate();
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
          <div className=" sm:text-[10.66px] text-[12px] text-[#655F5F] mb-[11px] text-right">
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

            <img src={heart} alt="Heart" className="hidden"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardMod;
