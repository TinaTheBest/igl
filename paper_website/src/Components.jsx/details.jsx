import NavBar from "./navbar";
import NavBarMod from "./navbarMod";

function Details(props) {
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
      <NavBar />
      <div className="">
        {/*<div className="fixed inset-0 top-[0px] overflow-y-auto bg-black bg-opacity-60">*/}
        <div className="bg-white rounded-t-[24.44px] p-[32.89px] sm:text-[22px] text-[20px] overflow-y-auto font-dm-sans">
          <div className="font-bold text-[#005BC5] sm:pt-[39.11px] sm:px-[32.89px] pb-[20px] sm:text-[22px] text-[20px]">
            {props.title}
          </div>
          <div className=" sm:px-[32.89px]">
            <div className=" font-bold sm:text-[20px] text-[16px]">Title</div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.title}
            </div>
            <div className=" font-bold sm:text-[20px] text-[16px]">
              Abstract
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.abstract}
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Publication date :
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {publication_date}
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Authors(s) :
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.authors}
            </div>
            <div className=" font-bold sm:text-[20px] text-[16px]">
              Institution(s) :{" "}
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.institutions}
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Referencee :{" "}
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.references}
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Key Words :{" "}
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {" "}
              {keywords}
            </div>
            <div className="font-bold sm:text-[20px] text-[16px]">
              Full text :
            </div>
            <div className="pb-[14px] sm:text-[16px] text-[13px] ">
              {props.full_text}
            </div>
            <a href={pdf_url}>
              <div className="flex items-center w-full justify-center mr-[365.7px] h-[68px] rounded-[17px] sm:mt-[122px] sm:mb-[122px] mt-[40px]  mb-[40px] bg-[#1B9DF0] sm:text-[20px] text-[16px] text-white font-semibold">
                Link to pdf
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
