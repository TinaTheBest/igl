import NavBar from "./navbar";
import NavBarMod from "./navbarMod";

function Details() {
  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          
          }
  
        `}
      </style>
      <NavBar />
      <div className="">
        {/*<div className="fixed inset-0 top-[0px] overflow-y-auto bg-black bg-opacity-60">*/}
        <div className="bg-white rounded-t-[24.44px] p-[32.89px] sm:text-[22px] text-[20px] overflow-y-auto font-dm-sans">
          <div className="font-bold text-[#005BC5] sm:pt-[39.11px] sm:px-[32.89px] pb-[20px] sm:text-[22px] text-[20px]">
            Semantic Analysis And Classifications Of E-mails Throught
            Informative Selection
          </div>
          <div className=" sm:px-[32.89px]">
            <div className=" font-bold sm:text-[20px] text-[16px]">Title</div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              Semantic analysis and classifications of E-mails throught
              informative Selection
            </div>
            <div className=" font-bold sm:text-[20px] text-[16px]">Resume</div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum...
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Writer(s) :
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              Yusra , Lina
            </div>
            <div className=" font-bold sm:text-[20px] text-[16px]">
              Institution(s) :{" "}
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              ESI, Poly
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Références bibliographiques :{" "}
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              ESI, Poly
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Integral Text
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's ldus
              PageMaker including versions of Lorem Ipsum
            </div>
            <div className="flex items-center w-full justify-center mr-[365.7px] h-[68px] rounded-[17px] sm:mt-[122px] sm:mb-[122px] mt-[40px]  mb-[40px] bg-[#1B9DF0] sm:text-[20px] text-[16px] text-white font-semibold">
              Link to pdf
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
