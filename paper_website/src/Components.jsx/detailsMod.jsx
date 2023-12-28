import NavBarMod from "./navbarMod";
import { Link } from "react-router-dom";

function DetailsMod() {
  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', 'sans-serif';
          
          }
  
        `}
      </style>
      <NavBarMod />
      <div className="bg-white rounded-[20px] mx-[10px] sm:mx-[40px] mt-[65px] sm:mt-[84px] font-dm-sans">
        <div className="font-bold text-[#005BC5] sm:pl-[32.89px] sm:pt-[39.11px]  p-[20px] pb-[20px] sm:text-[22px] text-[16px]">
          Semantic Analysis And Classifications Of E-mails Throught Informative
          Selection
        </div>
        <div className="sm:px-[32.89px] px-[20px]">
          <div className=" font-bold sm:text-[20px] text-[16px]">Title</div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            Semantic analysis and classifications of E-mails throught
            informative Selection
          </div>
          <div className=" font-bold sm:text-[20px] text-[16px]">Resume</div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum...
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
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Références bibliographiques :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Integral Text
          </div>
          <div className="pb-[16px] sm:pb-[140px] sm:text-[16px] text-[13px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's ldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </div>
      {/* 
      <div className="flex  bg-white rounded-[39.612px] items-center mx-[327px] my-[49px]">
        <div className="flex items-center justify-center py-[25.5px]">
          <div className="ml-[25.5px] p-[19.12px] border-[1.59px] border-[#1B9DF0] rounded-[26.408px] text-[25.498px] font-semibold">
            Return
          </div>
          <div className="ml-[25.5px] p-[19.12px] border-[1.59px] border-[#1B9DF0] rounded-[26.408px] text-[25.498px] font-semibold">
            Delete
          </div>
          <div className="ml-[25.5px] p-[19.12px] bg-[#1B9DF0] text-white rounded-[26.408px] text-[25.498px] font-semibold">
            Modify
          </div>
          <div className="ml-[25.5px] p-[19.12px] bg-[#1B9DF0] text-white rounded-[26.408px] mr-[25.5px] text-[25.498px] font-semibold">
            Validate
          </div>
        </div>
      </div>*/}

      <div className=" sm:fixed bottom-1 left-0 right-0 sm:flex  items-center justify-center font-dm-sans">
        <div
          className="bg-white sm:flex gap-[15px] py-[15px] rounded-[17px] sm:rounded-[30px] m-[17.3px] sm:m-[0]"
          style={{
            boxShadow: " 0px -7.312px 14.624px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Link to="/ModeratorFirstPage">
            <div className="text-center sm:ml-[15px] mx-[10px] sm:m-[0] mb-[10px] px-[25px] sm:py-[15px] py-[9.4px] border-[1.59px] border-[#1B9DF0] sm:rounded-[20px] rounded-[12px] sm:text-[18px] text-[13px] font-semibold">
              Return
            </div>
          </Link>
          <div className="text-center mb-[10px] mx-[10px] sm:m-[0] px-[25px]  border-[1.59px] sm:py-[15px] py-[9.4px]  border-[#1B9DF0] sm:rounded-[20px] rounded-[12px] sm:text-[18px] text-[13px] font-semibold">
            Delete
          </div>
          <Link to="/ModeratorFirstPage/ModeratorModify">
            <div className="text-center mb-[10px] mx-[10px] px-[25px] sm:m-[0] sm:py-[15px] py-[9.4px]  bg-[#1B9DF0] text-white sm:rounded-[20px] rounded-[12px] sm:text-[18px] text-[13px] ">
              Modify
            </div>
          </Link>
          <div className="text-center mb-[10px] mx-[10px] px-[25px] sm:m-[0] sm:py-[15px] py-[9.4px]  bg-[#1B9DF0] text-white sm:rounded-[20px] rounded-[12px] sm:mr-[15px] sm:text-[18px] text-[13px] ">
            Validate
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsMod;
