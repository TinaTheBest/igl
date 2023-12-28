import NavBar from "../../Components.jsx/navbar";
import Card from "../../Components.jsx/card";
import FilSer from "../../Components.jsx/FilSer";
function UserFirstPage() {
  return (
    <>
      <NavBar />
      <div className="sm:mt-[84px] mt-[65px]">
        <FilSer />
        {/*Lina should Add Filters component div hdik just to fix margin top bch mattscrollach navbar*/}
      </div>
      <div>
        <Card />
        {/*Hna yjo cards component Card */}
      </div>
    </>
  );
}
export default UserFirstPage;
