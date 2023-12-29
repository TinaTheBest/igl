import NavBarMod from "../../Components.jsx/navbarMod";
import ModifyModInput from "../../Components.jsx/modifyModInput";
function ModeratorModify() {
  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
        {/*Cette div va contenir component ModifyModInput selon article choisi*/}
        <ModifyModInput />
      </div>
    </>
  );
}
export default ModeratorModify;
