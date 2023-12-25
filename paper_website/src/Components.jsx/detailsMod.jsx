import NavBar from "./navbar";

function DetailsMod() {
  return (
    <>
      <NavBar />
      <div className="bg-white rounded-[20px] mx-[40px]">
        <div className="font-bold text-[#005BC5] pl-[32.89px] pt-[39.11px] pb-[20px] sm:text-[22px] text-[20px]">
          Semantic Analysis And Classifications Of E-mails <br />
          Throught Informative Selection
        </div>
        <div className="px-[32.89px]">
          <div className=" font-bold sm:text-[20px] text-[20px]">Title</div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
            Semantic analysis and classifications of E-mails throught
            informative Selection
          </div>
          <div className=" font-bold sm:text-[20px] text-[20px]">Resume</div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
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
          <div className="font-bold sm:text-[20px] text-[20px]">
            Writer(s) :
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
            Yusra , Lina
          </div>
          <div className=" font-bold sm:text-[20px] text-[20px]">
            Institution(s) :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[20px]">
            Références bibliographiques :{" "}
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[20px]">
            Integral Text
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
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
      <div className="flex items-center justify-center mt-[20px]">
        <div className="bg-white flex gap-[20px] py-[25.5px] rounded-[35.21px] shadow-box">
          <div className="ml-[20px] px-[25px] py-[15px] border-[1.59px] border-[#1B9DF0] rounded-[26.408px] text-[25px] font-semibold">
            Return
          </div>
          <div className="px-[25px] py-[15px] border-[1.59px] border-[#1B9DF0] rounded-[26.408px] text-[25px] font-semibold">
            Delete
          </div>
          <div className="px-[25px] py-[15px] bg-[#1B9DF0] text-white rounded-[26.408px] text-[25px] font-semibold">
            Modify
          </div>
          <div className="px-[25px] py-[15px] bg-[#1B9DF0] text-white rounded-[26.408px] mr-[20px] text-[25px] font-semibold">
            Validate
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsMod;
