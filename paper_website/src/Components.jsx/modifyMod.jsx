import NavBar from "./navbar";
import Modify from "../assets/modify.svg";
/**
 * Composant représentant la page de modification d'une publication par un modérateur.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la page de modification.
 */
function ModifyMod() {
  return (
    <>
      <NavBar />
      <div className="bg-white rounded-[20px] mx-[128px] mt-[84px]">
        <div className="font-bold text-[#005BC5] px-[32.89px] pt-[39.11px] pb-[50px] sm:text-[20px] text-[20px]">
          Title
        </div>
        <div className="px-[32.89px]">
          <div className=" font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div>Title</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
            Semantic analysis and classifications of E-mails throught
            informative Selection
          </div>
          <div className=" font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div>Resume</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
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
            PageMaker including versions of Lorem Ipsum...
          </div>

          <div className="font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div>Writer(s) :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">
            Yusra , Lina
          </div>
          <div className=" font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div>Institution(s) :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div>Références bibliographiques :</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[16px] ">ESI, Poly</div>
          <div className="font-bold sm:text-[20px] text-[20px] justify-between flex">
            <div> Integral Text</div>
            <div>
              <img src={Modify} alt="Modify" />
            </div>
          </div>
          <div className="pb-[140px] sm:text-[16px] text-[16px] ">
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
      <div className="fixed bottom-1 left-0 right-0 flex items-center justify-center ">
        <div className="bg-white flex gap-[20px] py-[15px] rounded-[20px] shadow-xl">
          <div className="rounded-[15px] ml-[15px] text-[18px] font-semibold py-[10px] px-[50px] border-[1.828px] border-[#1B9DF0]">
            Discard
          </div>
          <div className="rounded-[15px] text-[18px] font-semibold py-[10px] px-[25px] text-white bg-[#1B9DF0] mr-[15px]">
            Save changes
          </div>
        </div>
      </div>
    </>
  );
}
export default ModifyMod;
