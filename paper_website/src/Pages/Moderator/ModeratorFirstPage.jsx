import NavBarMod from "../../Components.jsx/navbarMod";
import CardMod from "../../Components.jsx/cardMod";
function ModeratorFirstPage() {
  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
        {/*Cette div va contenir les cartes des articles CardMod */}
        <CardMod />
      </div>
    </>
  );
}
export default ModeratorFirstPage;
