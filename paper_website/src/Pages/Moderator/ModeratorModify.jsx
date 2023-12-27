import NavBarMod from "../../Components.jsx/navbarMod";
import ModifyModInput from "../../Components.jsx/modifyModInput";
function ModeratorModify() {
  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[90px] mt-[72px]">
        {/*Cette div va contenir component ModifyModInput selon article choisi*/}
      </div>
    </>
  );
}
export default ModeratorModify;
