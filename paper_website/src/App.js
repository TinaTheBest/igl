import "./App.css";
import NavBar from "./Components.jsx/navbar";
import CardMod from "./Components.jsx/cardMod";
import Card from "./Components.jsx/card";
import Details from "./Components.jsx/details";
import TagsInput from "./Components.jsx/TagsInput";
import x from "./assets/x.svg";
import DetailsMod from "./Components.jsx/detailsMod";
import ModifyMod from "./Components.jsx/modifyMod";
import ModifyModInput from "./Components.jsx/modifyModInput";
import NavBarMod from "./Components.jsx/navbarMod";
import Login from "./Components.jsx/login";
import SignUp from "./Components.jsx/signup";
import ModeratorFirstPage from "./Pages/Moderator/ModeratorFirstPage";
import ModeratorModify from "./Pages/Moderator/ModeratorModify";
import UserFirstPage from "./Pages/User/UserFirstPage";
import UserFav from "./Pages/User/UserFav";
import UserDetails from "./Pages/User/UserDetails";
import UserFilters from "./Pages/User/UserFilters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModeratorDetails from "./Pages/Moderator/ModeratorDetails";
import PageLogin from "./Pages/PageLogin";
import PageSignUp from "./Pages/PageSignUp";
import AdminFirstPage from "./Pages/Administrator/AdminFirstPage";
import DashboardModer from "./Components.jsx/DashboardModer";
function App() {
  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0 relative">
      <div id="root">
        {/* <DashboardModer/> */}
        <Router>
          <Routes>
           
            <Route
              path="/AdminFirstPage"
              element={<AdminFirstPage />}
            ></Route>
           
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;