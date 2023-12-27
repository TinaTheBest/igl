import logo from "../assets/logo.svg";
import account from "../assets/account.svg";
import question from "../assets/icon-question.svg";
import article from "../assets/article.svg";
import menu from "../assets/menu.svg";
import article_non from "../assets/article_non_active.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
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

      <div className="fixed-top top-0 left-0 right-0 flex sm:px-[40.8px] sm:pt-[12px] sm:pb-[12px] items-center pl-[20px] py-[6px] justify-between bg-[#E7F1FF]">
        <div className="w-[67.27px] h-[48px] sm:w-[87.55px] sm:h-[59.55px]">
          <img src={logo} alt="Logo" />
        </div>
        <div
          //className={`m-[10] w-[64px] h-[54px] flex justify-between  bg-white items-center rounded-[20px] sm:ml-[43.68px] sm:w-[1134.74px] sm:h-[72.8px]`}
          className="mr-[10px] w-[64px] h-[54px] flex justify-between  bg-white items-center rounded-[20px] sm:ml-[43.68px] sm:w-full sm:h-[60px] shadow-lg"
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
              to="/UserFirstPage"
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
                  Find Articles
                </div>
              </div>
            </Link>
            <Link
              to="/UserFav"
              className=""
              onClick={() => setActiveTwo((activeTwo) => !activeTwo)}
            >
              <div
                className={
                  activeTwo
                    ? "flex items-center gap-[7.11px] border-b-2 border-[#537FE7]"
                    : "flex items-center gap-[7.11px] "
                }
              >
                <img src={activeTwo ? article : article_non} alt="Article" />
                <div className={activeTwo ? "" : "text-[#6E6E9B]"}>
                  My favorite articles
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
            <div className="sm:flex sm:text-white  sm:bg-[#1B9DF0] sm:h-[39.11px] sm:w-[92.66px] sm:px-[21.3px] sm:py-[8.89px] sm:rounded-[20px] sm:text-[14.222px]">
              LogOut
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "sm:hidden  bg-white rounded-t-[20px] h-[244px] font-dm-sans font-semibold text-[18.16px]"
        }
      >
        <div className="sm:hidden  pl-[21px] pt-[36px] ">
          <ul>
            <li className="pb-[13.88px]">Articles</li>
            <li className="pb-[13.88px]">Favourtie Articles</li>
            <li className="pb-[13.88px]">Help</li>
            <li className="pb-[13.88px]">My Account</li>
            <li className="pb-[13.88px]">Log Out</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
