import NavBar from "../../Components.jsx/navbar";
import Details from "../../Components.jsx/details";
function UserDetails() {
  return (
    <>
      <NavBar />
      <div className="sm:mt-[84px] mt-[65px]"></div>
      {/*Component Details */}
      <Details />
    </>
  );
}
export default UserDetails;
