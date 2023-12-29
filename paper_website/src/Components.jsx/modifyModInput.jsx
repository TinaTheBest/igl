import NavBarMod from "./navbarMod";
import Modify from "../assets/modify.svg";
import { useState } from "react";
function ModifyModInput() {
  const [modifyOne, setActiveOne] = useState(false);
  const [modifyTwo, setActiveTwo] = useState(false);
  const [modifyThree, setActiveThree] = useState(false);
  const [modifyFour, setActiveFour] = useState(false);
  const [modifyFive, setActiveFive] = useState(false);
  const [modifySix, setActiveSix] = useState(false);
  const [modifySeven, setActiveSeven] = useState(false);
  const [modifyEight, setActiveEight] = useState(false);
  return (
    <>
      <style>
        {`
          .shadow {
            font-family: 'DM Sans', sans-serif;
        
        `}
      </style>
      <NavBarMod />
      <div className="bg-white rounded-[20px] mx-[10px] sm:mx-[40px] mt-[65px] sm:mt-[84px] font-dm-sans">
        <div className="font-bold text-[#005BC5]  sm:px-[32.89px] px-[20px] pt-[30px] pb-[20px]  sm:text-[22px] text-[16px]">
          Semantic Analysis And Classifications Of E-mails Throught Informative
          Selection
        </div>
        <div className="sm:px-[32.89px] px-[20px]">
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Title:</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveOne((modifyOne) => !modifyOne)}
                className={modifyOne ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifyOne ? "hidden" : ""}>
              Semantic Analysis And Classifications Of E-mails Throught
              Informative Selection
            </div>
            <input
              type="text"
              className={
                modifyOne
                  ? "my-[10px] p-2 border border-gray-300 rounded-md resize-y w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Title"
            />
          </div>
          <div
            className={
              modifyOne ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Abstract</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveTwo((modifyTwo) => !modifyTwo)}
                className={modifyTwo ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifyTwo ? "hidden" : ""}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum...
            </div>
            <input
              type="text"
              className={
                modifyTwo
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Abstract"
            />
          </div>
          <div
            className={
              modifyTwo ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Publication date :</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveSix((modifySix) => !modifySix)}
                className={modifySix ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifySix ? "hidden" : ""}>Yusra, Asma</div>
            <input
              type="text"
              className={
                modifySix
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Publication date"
            />
          </div>
          <div
            className={
              modifyThree ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Authors(s):</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveThree((modifyThree) => !modifyThree)}
                className={modifyThree ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifyThree ? "hidden" : ""}>Yusra, Asma</div>
            <input
              type="text"
              className={
                modifyThree
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Authors"
            />
          </div>
          <div
            className={
              modifyThree ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}

          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Institution(s):</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveFour((modifyFour) => !modifyFour)}
                className={modifyFour ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifyFour ? "hidden" : ""}>Yusra,Asma</div>
            <input
              type="text"
              className={
                modifyFour
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Institution(s)"
            />
          </div>
          <div
            className={
              modifyFour ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>References:</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveSeven((modifySeven) => !modifySeven)}
                className={modifySeven ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifySeven ? "hidden" : ""}>Yusra, Asma</div>
            <input
              type="text"
              className={
                modifySeven
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="References"
            />
          </div>
          <div
            className={
              modifyThree ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Key Words:</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveEight((modifyEight) => !modifyEight)}
                className={modifyEight ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="pb-[14px] sm:text-[16px] text-[13px] ">
            <div className={modifyEight ? "hidden" : ""}>Yusra, Asma</div>
            <input
              type="text"
              className={
                modifyEight
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Key Wordss"
            />
          </div>
          <div
            className={
              modifyThree ? "hidden" : "bg-[#ECECEC] h-[0.5px] mb-[10px]"
            }
          ></div>
          {/*************************************************************************************************************** */}
          <div className=" font-bold sm:text-[20px] text-[16px] justify-between flex">
            <div>Full Text:</div>
            <div>
              <img
                src={Modify}
                alt="Modify"
                onClick={() => setActiveFive((modifyFive) => !modifyFive)}
                className={modifyFive ? "hidden" : "w-[21px] h-[21px]"}
              />
            </div>
          </div>
          <div className="sm:text-[16px] text-[13px] pb-[40px]">
            <div className={modifyFive ? "hidden" : ""}>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum...
              </div>
            </div>
            <input
              type="text"
              className={
                modifyFive
                  ? "mt-[10px] mb-[122px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder="Integral Text"
            />
          </div>
          {/*************************************************************************************************************** */}
          <div className="sm:fixed sm:bottom-4 sm:left-0 sm:right-0 sm:flex items-center justify-center ">
            <div
              className="bg-white sm:flex gap-[20px] py-[15px] rounded-[17px] sm:rounded-[20px] m-[17.3px] sm:m-[0]"
              style={{
                boxShadow: " 0px -7.312px 14.624px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="text-center rounded-[15px] mb-[10px] sm:m-[0px] mx-[10px] sm:ml-[15px] sm:text-[18px] text-[13px] font-semibold py-[10px] px-[50px] border-[1.828px] border-[#1B9DF0]">
                Discard
              </div>
              <div className="text-center rounded-[15px] mb-[10px] sm:m-[0px] mx-[10px] sm:text-[18px] text-[13px] font-semibold py-[10px] px-[25px] text-white bg-[#1B9DF0] sm:mr-[15px]">
                Save changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModifyModInput;
