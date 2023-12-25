import NavBar from "./navbar";
import Modify from "../assets/modify.svg";
function modifyMod() {
  return (
    <>
      <NavBar />
      <div className="bg-white rounded-[20px] mx-[128px]">
        <div className="font-bold text-[#005BC5] px-[32.89px] pt-[39.11px] pb-[52.89px] sm:text-[28px] text-[20px]">
          Semantic Analysis And Classifications Of E-mails <br />
          Throught Informative Selection
        </div>
        <div className="px-[61px]">
          <div className=" font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div>Title</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[21.61px] text-[16px] ">
            Semantic analysis and classifications of E-mails throught
            informative Selection
          </div>
          <div className=" font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div>Resume</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>

          <div className="pb-[14px] sm:text-[20px] text-[16px] ">
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

          <div className="font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div>Writer(s) :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[20px] text-[16px] ">
            Yusra , Lina
          </div>
          <div className=" font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div>Institution(s) :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[20px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div>Références bibliographiques :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[20px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[27.79px] text-[20px] justify-between flex">
            <div> Integral Text</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[20px] text-[16px] ">
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
      <div className="flex items-center justify-center mt-[20px] mb-[20px]">
        <div className="bg-white flex gap-[21.25px] py-[20px] rounded-[40px] shadow-box">
          <div className="rounded-[26.926px] ml-[20px] text-[20px] font-semibold py-[20px] px-[80px] border-[1.828px] border-[#1B9DF0]">
            Discard
          </div>
          <div className="rounded-[26.926px] text-[20px] font-semibold py-[20px] px-[55px] text-white bg-[#1B9DF0] mr-[20px]">
            Save changes
          </div>
        </div>
      </div>
    </>
  );
}
export default modifyMod;
