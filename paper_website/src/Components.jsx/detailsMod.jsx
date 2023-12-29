import NavBarMod from "./navbarMod";
import { Link } from "react-router-dom";

function DetailsMod(props) {
  const {
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
  } = props;
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
          {id}
        </div>
        <div className="sm:px-[32.89px] px-[20px]">
          <div className=" font-bold sm:text-[20px] text-[16px]">Title :</div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">{title}</div>
          <div className=" font-bold sm:text-[20px] text-[16px]">
            Abstract :
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            {abstract}
          </div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Publication date :
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            {publication_date}
          </div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Author(s) :
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">{authors}</div>

          <div className=" font-bold sm:text-[20px] text-[16px]">
            Institution(s) :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            {" "}
            {institutions}
          </div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            References :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            {" "}
            {references}
          </div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Key Words :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            {" "}
            {keywords}
          </div>
          <div className="font-bold sm:text-[20px] text-[16px]">
            Full Text :
          </div>
          <div className="pb-[16px] sm:pb-[140px] sm:text-[16px] text-[13px] ">
            {full_text}
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
