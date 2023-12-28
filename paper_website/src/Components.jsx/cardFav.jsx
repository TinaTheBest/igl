import heart from "../assets/heart.svg";
import { Link } from "react-router-dom";
function CardFav() {
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
            Semantic analysis and classifications of e-mails throught
            informative Selection
          </div>
          <div className=" sm:text-[10.66px] text-[12px] text-[#655F5F] mb-[11px] text-right">
            Published in 2016
          </div>
          <div className="pb-[11px] sm:text-[12px] text-[12px]">
            The emergence of novel types of communication, such as email, has
            been brought on by the development of the internet, which radically
            ...{" "}
          </div>
          <div className="w-full bg-[#E7E7EE] h-[0.889px] mb-[11px]"></div>
          <div className="flex justify-between">
            <Link to="/UserFirstPage/UserDetails">
              <div className="flex text-[#1B9DF0] font-bold sm:text-[14.22px] text-[13px] border-[1px] border-[#1B9DF0] w-[160px] rounded-xl px-4 py-2">
                See More details
              </div>
            </Link>
            <img src={heart} alt="Heart" className="hidden"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardFav;
