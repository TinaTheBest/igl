import NavBar from "../../Components.jsx/navbar";
import CardFav from "../../Components.jsx/cardFav";
function UserFav() {
  return (
    <>
      <NavBar />
      <div className="sm:mt-[84px] mt-[65px]">
        <div className="mb-[10px]">
          {/*"hna yjo cards CardFav "*/}
          <CardFav />
        </div>
        <CardFav />
      </div>
    </>
  );
}
export default UserFav;
