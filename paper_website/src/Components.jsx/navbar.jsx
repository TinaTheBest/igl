import logo from "../assets/logo.svg";
import account from "../assets/account.svg";
import question from "../assets/icon-question.svg";
import article from "../assets/article.svg";
import menu from "../assets/menu.svg";
import article_non from "../assets/article_non_active.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";

function NavBar(props) {
  const userId = props.id;

  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token"); // Effacer le token d'authentification
      window.history.replaceState({}, "", "/PageLogin"); // Remplacer l'état de l'historique avec la page de connexion
      navigate("/PageLogin");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la déconnexion :",
        error
      );
      // Gérer l'erreur ou afficher un message d'erreur
    }
  };

  return (
    <>
      <style>
        {`
          .font-dm-sans {
            font-family: 'DM Sans', sans-serif;
          
          }
          .fixed-top {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999; // Adjust the z-index as needed
          }
        `}
      </style>

      <div className="fixed-top top-0 left-0 right-0 flex sm:px-[40.8px] sm:pt-[12px] sm:pb-[12px] items-center pl-[20px] py-[6px] justify-between bg-[#E7F1FF] font-dm-sans">
        <div className="w-[67.27px] h-[48px] sm:w-[87.55px] sm:h-[59.55px]">
          <img src={logo} alt="Logo" />
        </div>
        <div
          //className={`m-[10] w-[64px] h-[54px] flex justify-between  bg-white items-center rounded-[20px] sm:ml-[43.68px] sm:w-[1134.74px] sm:h-[72.8px]`}
          className="sm:mr-[6px] mr-11 w-[64px] h-[54px] flex justify-center sm:justify-between  bg-white items-center rounded-[20px] sm:ml-[43.68px] sm:w-full sm:h-[60px] shadow-lg"
        >
          <div
            className="sm:hidden  pl-[10px] pr-[10px] cursor-pointer transition-colors duration-[0.4s]"
            onClick={() => setNav((nav) => !nav)}
          >
            <MdMenu className="w-[25px] h-[25px]" />
          </div>

          <div className="hidden sm:flex sm:justify-center sm: items-center sm:gap-[29px] sm:pl-[21.16px]">
            <div
              onClick={() => {
                setActiveOne((activeOne) => !activeOne);
                navigate("/UserFirstPage/" + userId, {
                  state: { user_id: userId },
                });
              }}
            >
              <div className="flex items-center gap-[7.11px] hover:border-b-2 hover:border-[#537FE7] ">
                <img
                  src={activeOne ? article : article_non}
                  alt="Article"
                  className="hidden"
                />
                <button className="text-[#6E6E9B] hover:text-black">
                  Find Articles
                </button>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTwo((activeTwo) => !activeTwo);
                navigate(`/UserFirstPage/UserFav/` + userId, {
                  state: { user_id: userId },
                });
              }}
            >
              <div
                className={
                  "flex items-center gap-[7.11px] hover:border-b-2 hover:border-[#537FE7] "
                }
              >
                <img
                  src={activeTwo ? article : article_non}
                  alt="Article"
                  className="hidden"
                />
                <button className="text-[#6E6E9B] hover:text-black">
                  My favorite articles
                </button>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:gap-[10.67px] sm:items-center sm:w-[220.971px] ">
            <div>
              <img src={question} alt="Question" />
            </div>
            <div>
              <img src={account} alt="Account" />
            </div>
            <button
              className="sm:flex sm:text-white  sm:bg-[#1B9DF0] sm:h-[39.11px] sm:w-[92.66px] sm:px-[21.3px] sm:py-[8.89px] sm:rounded-[20px] sm:text-[14.222px] hover:bg-opacity-90"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "sm:hidden font-dm-sans fixed top-[65px] shadow-lg bg-white rounded-t-[20px] font-dm-sans font-semibold text-[18.16px] w-full"
        }
      >
        <div className="sm:hidden  pl-[21px] pt-[13.88px] ">
          <ul>
            <li
              className="pb-[13.88px] hover:text-[#005BC5]"
              onClick={() => {
                navigate("/UserFirstPage/" + userId, {
                  state: { user_id: userId },
                });
              }}
            >
              <button>Articles</button>
            </li>

            <li
              className="pb-[13.88px] hover:text-[#005BC5]"
              onClick={() => {
                setActiveTwo((activeTwo) => !activeTwo);
                navigate(`/UserFirstPage/UserFav/` + userId, {
                  state: { user_id: userId },
                });
              }}
            >
              <button>Favourtie Articles</button>
            </li>

            <li className="pb-[13.88px] hover:text-[#005BC5]">
              <button>Help</button>
            </li>
            <li className="pb-[13.88px] hover:text-[#005BC5]">
              <button>My Account</button>
            </li>
            <li
              className="pb-[13.88px] hover:text-[#005BC5]"
              onClick={handleLogout}
            >
              <button>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
