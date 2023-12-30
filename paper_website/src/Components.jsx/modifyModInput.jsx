import NavBarMod from "./navbarMod";
import Modify from "../assets/modify.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ModifyModInput(props) {
  console.log("props in ModifyModInput:", props);
  const [modifyOne, setActiveOne] = useState(false);
  const [modifyTwo, setActiveTwo] = useState(false);
  const [modifyThree, setActiveThree] = useState(false);
  const [modifyFour, setActiveFour] = useState(false);
  const [modifyFive, setActiveFive] = useState(false);
  const [modifySix, setActiveSix] = useState(false);
  const [modifySeven, setActiveSeven] = useState(false);
  const [modifyEight, setActiveEight] = useState(false);

  let navigate = useNavigate();

  const {
    id,
    title,
    authors,
    institutions,
    keywords,
    abstract,
    references,
    publication_date,
    full_text,
    pdf_url,
  } = props;

  const [formData, setFormData] = useState({
    title: title,
    authors: authors,
    institutions: institutions,
    keywords: keywords,
    abstract: abstract,
    references: references,
    publication_date: publication_date,
    full_text: full_text,
  });

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/ModArticles/update_document/${props.id}`,
        formData
      );

      // Handle the response, e.g., redirect to a new page, update state, etc.
      console.log("SignUp successful:", response.data);
      navigate("/ModeratorFirstPage/ModeratorDetails/" + props.id, {
        state: { article: formData },
      })
    } catch (error) {
      console.error("Error during Sign Up:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
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
            <div className={modifyOne ? "hidden" : ""}>{title}</div>
            <input
              type="text"
              className={
                modifyOne
                  ? "my-[10px] p-2 border border-gray-300 rounded-md resize-y w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={title}
              value={formData.title}
              name="title"
              onChange={handleInputChange}
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
            <div className={modifyTwo ? "hidden" : ""}>{abstract}</div>
            <input
              type="text"
              className={
                modifyTwo
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={abstract}
              value={formData.abstract}
              name="abstract"
              onChange={handleInputChange}
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
            <div className={modifySix ? "hidden" : ""}>{publication_date}</div>
            <input
              type="text"
              className={
                modifySix
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={publication_date}
              value={formData.publication_date}
              name="publication_date"
              onChange={publication_date}
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
            <div className={modifyThree ? "hidden" : ""}>{authors} </div>
            <input
              type="text"
              className={
                modifyThree
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={authors}
              value={formData.authors}
              name="authors"
              onChange={handleInputChange}
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
            <div className={modifyFour ? "hidden" : ""}>{institutions} </div>
            <input
              type="text"
              className={
                modifyFour
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={institutions}
              value={formData.institutions}
              name="institutions"
              onChange={handleInputChange}
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
            <div className={modifySeven ? "hidden" : ""}>{references} </div>
            <input
              type="text"
              className={
                modifySeven
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={references}
              value={formData.references}
              name="references"
              onChange={handleInputChange}
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
            <div className={modifyEight ? "hidden" : ""}>{keywords} </div>
            <input
              type="text"
              className={
                modifyEight
                  ? "my-[10px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={keywords}
              value={formData.keywords}
              name="keywords"
              onChange={handleInputChange}
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
              <div>{full_text}</div>
            </div>
            <input
              type="text"
              className={
                modifyFive
                  ? "mt-[10px] mb-[122px] p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  : "hidden"
              }
              placeholder={full_text}
              value={formData.full_text}
              name="full_text"
              onChange={handleInputChange}
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
                <button onClick={handleFormSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModifyModInput;
