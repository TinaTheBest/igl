import React from "react";
import NavBarMod from "../../Components.jsx/navbarMod";
import ModifyModInput from "../../Components.jsx/modifyModInput";
import { useLocation } from "react-router-dom";
/**
 * Page pour modifier les détails d'un article par le modérateur.
 * @component
 */
function ModeratorModify() {
  const location = useLocation();
  const { state } = location;
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
  } = state.article.props;
  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
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
