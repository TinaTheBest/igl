import logo from "../assets/logo.svg";
import account from "../assets/account.svg";
import question from "../assets/icon-question.svg";
import article from "../assets/article.svg";
import menu from "../assets/menu.svg";
import article_non from "../assets/article_non_active.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/**
 * Composant représentant la barre de navigation pour les modérateurs.
 * @component
 * @returns {JSX.Element} Élément JSX représentant la barre de navigation des modérateurs.
 */
function NavBarMod() {
    // Initialisation du hook de navigation
  const navigate = useNavigate();

    // Gestion de l'état pour la visibilité du menu mobile et l'onglet actif
  const [nav, setNav] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
/**
   * Gère la déconnexion du modérateur.
   * @function
   */
  const handleLogout = () => {
    try {
       // Suppression du token d'authentification
      localStorage.removeItem('token'); // Effacer le token d'authentification
      window.history.replaceState({}, '', '/PageLogin'); // Remplacer l'état de l'historique avec la page de connexion
      navigate('/PageLogin');
    } catch (error) {
      console.error("Une erreur s'est produite lors de la déconnexion :", error);
      // Gérer l'erreur ou afficher un message d'erreur
    }
  };
  // Retourne la structure JSX du composant

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
          className="mr-[6px] w-[64px] h-[54px] flex justify-between  bg-white items-center rounded-[20px] sm:ml-[43.68px] sm:w-full sm:h-[60px] shadow-lg"
        >
          <div
            className="sm:hidden  pl-[20px] pr-[20px] mr-[10px] ursor-pointer transition-colors duration-[0.4s]"
            onClick={() => setNav((nav) => !nav)}
          >
            <img src={menu} alt="Menu" />
          </div>

          <div className="hidden sm:flex sm:justify-center sm: items-center sm:gap-[29px] sm:pl-[21.16px]">
            <Link
              onClick={() => setActiveOne((activeOne) => !activeOne)}
              to="/ModeratorFirstPage"
              className=""
            >
              <div
                className={
                  activeOne
                    ? "flex items-center gap-[7.11px] border-b-2 border-[#537FE7]"
                    : "flex items-center gap-[7.11px] "
                }
              >
                <img src={activeOne ? article : article_non} alt="Article" />
                <div className={activeOne ? "" : "text-[#6E6E9B]"}>
                  Articles
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex sm:gap-[10.67px] sm:items-center sm:w-[220.971px] ">
            <div>
              <img src={question} alt="Question" />
            </div>
            <div>
              <img src={account} alt="Account" />
            </div>
            <div
              className="sm:flex sm:text-white  sm:bg-[#1B9DF0] sm:h-[39.11px] sm:w-[92.66px] sm:px-[21.3px] sm:py-[8.89px] sm:rounded-[20px] sm:text-[14.222px] hover:bg-opacity-90"
              onClick={handleLogout}
            >
              LogOut
            </div>
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
            <Link to="/ModeratorFirstPage">
              <li className="pb-[13.88px] hover:text-[#005BC5]">Articles</li>
            </Link>
            <li className="pb-[13.88px] hover:text-[#005BC5]">Help</li>
            <li className="pb-[13.88px] hover:text-[#005BC5]">My Account</li>
            <li
              className="pb-[13.88px] hover:text-[#005BC5]"
              onClick={handleLogout}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarMod;
