import "./App.css";
import ModeratorFirstPage from "./Pages/Moderator/ModeratorFirstPage";
import ModeratorModify from "./Pages/Moderator/ModeratorModify";
import ModeratorDetails from "./Pages/Moderator/ModeratorDetails";
import UserFirstPage from "./Pages/User/UserFirstPage";
import UserFav from "./Pages/User/UserFav";
import UserDetails from "./Pages/User/UserDetails";
import UserFilters from "./Pages/User/UserFilters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLogin from "./Pages/PageLogin";
import PageSignUp from "./Pages/PageSignUp";
import AdminUpload from "./Pages/Administrator/AdminUpload";
import AdminFirstPage from "./Pages/Administrator/AdminFirstPage";
function App() {
  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0 relative">
      <div id="root">
        {/* Content, including NavBar and Details 
        <NavBar />

        <div className="fixed-top top-0 left-0 right-0 flex sm:px-[40.8px] sm:pt-[12px] sm:pb-[12px] items-center pl-[20px] py-[6px] bg-black bg-opacity-60 h-[84px]"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>
          <img
            src={x}
            alt="Close"
            className="absolute top-4 right-4 cursor-pointer z-30"
          />
  </div>*/}
        <Router>
          <Routes>
            <Route path="/" element={<PageLogin />}></Route>
            {/*Authentification*******************************************************************************/}
            <Route path="/PageLogin" element={<PageLogin />}></Route>
            <Route path="/PageSignUp" element={<PageSignUp />}></Route>
            {/*Administrateur*********************************************************************************/}
            <Route path="/AdminFirstPage" element={<AdminFirstPage />}></Route>
            <Route
              path="/AdminFirstPage/AdminUpload"
              element={<AdminUpload />}
            ></Route>
            {/*Moderator**************************************************************************************/}
            <Route
              path="/ModeratorFirstPage"
              element={<ModeratorFirstPage />}
            ></Route>
            <Route
              path="/ModeratorFirstPage/ModeratorDetails/modify/:id"
              element={<ModeratorModify />}
            ></Route>
            <Route
              path="/ModeratorFirstPage/ModeratorDetails/:id"
              element={<ModeratorDetails />}
            />
            {/*User*****************************************************************************************/}
            <Route
              path="/UserFirstPage/:id"
              element={<UserFirstPage />}
            ></Route>
            <Route
              path="/UserFirstPage/UserDetails/:id"
              element={<UserDetails />}
            ></Route>
            <Route path="/UserFilters" element={<UserFilters />}></Route>
            <Route
              path="/UserFirstPage/UserFav/:id"
              element={<UserFav />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
