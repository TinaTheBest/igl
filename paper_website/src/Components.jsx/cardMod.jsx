import NavBarMod from "./navbarMod";
function CardMod() {
  return (
    <>
      <div>
        <div className="bg-white rounded-[20px] sm:mx-[40.8px] mx-[10px] mb-[15px] shadow-lg">
          <div className="flex justify-between items-center gap-[37.33px] p-[20px]">
            <div>
              <div className="font-semibold text-[#005BC5] sm:text-[20px] fond-bold text-[13px]">
                Semantic analysis and classifications of e-mails throught
                informative Selection
              </div>
              <div className="sm:text-[13px] text-[10px]">
                The emergence of novel types of communication, such as email,
                has been brought on by the development of the internet, which
                radically ...{" "}
              </div>
            </div>
            <div className="hidden sm:flex sm:justify-center sm:items-center sm:rounded-[14.25px] sm:border-[1px] sm:py-[9px] sm:px-[25px] sm:border-[#1B9DF0] sm:text-[#1B9DF0] sm:text-[16px] sm:font-bold">
              Review and validate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardMod;
