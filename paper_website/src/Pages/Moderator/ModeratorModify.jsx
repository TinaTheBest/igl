import React from 'react';
import NavBarMod from "../../Components.jsx/navbarMod";
import ModifyModInput from "../../Components.jsx/modifyModInput";
import { useLocation } from "react-router-dom";

function ModeratorModify() {
  const location = useLocation();
  // Accédez à l'état de localisation qui contient l'article
  const { state } = location;

  // Destructurez l'article de l'état de localisation
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
  } = state ? state.article : {};
  console.log("detaaaailll")
  console.log(state.article)
  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
        {/*Cette div va contenir component ModifyModInput selon article choisi*/}
        <ModifyModInput
          id={id}
          title={title}
          authors={authors}
          institutions={institutions}
          keywords={keywords}
          abstract={abstract}
          references={references}
          publication_date={publication_date}
          full_text={full_text}
          pdf_url={pdf_url}
        />
      </div>
    </>
  );
}

export default ModeratorModify;
