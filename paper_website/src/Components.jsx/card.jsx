import heart from "../assets/heart.svg";
function Card() {
  return (
    <>
      <div className="bg-white rounded-[35px] sm:w-[296px] w-[333px] items-center">
        <div className="flex-col items-center p-[25px]">
          <div className="pb-[11px] font-bold sm:text-[16px] text-[24px]">
            Semantic analysis and classifications of e-mails throught
            informative Selection
          </div>
          <div className=" sm:text-[10.66px] text-[12px] text-[#655F5F] mb-[11px] text-right">
            Published in 2016
          </div>
          <div className="pb-[11px] sm:text-[12px] text-[15px]">
            The emergence of novel types of communication, such as email, has
            been brought on by the development of the internet, which radically
            ...{" "}
          </div>
          <div className="w-full bg-[#E7E7EE] h-[0.889px] mb-[11px]"></div>
          <div className="flex justify-between">
            <div className="flex text-[#1B9DF0] font-bold sm:text-[14.22px] text-[16px] border-[1px] border-[#1B9DF0] w-[160px] rounded-xl px-4 py-2">
              See More details
            </div>
            <img src={heart} alt="Heart"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
