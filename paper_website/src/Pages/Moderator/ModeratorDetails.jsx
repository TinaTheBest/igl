import NavBarMod from "../../Components.jsx/navbarMod";
import DetailsMod from "../../Components.jsx/detailsMod";
import { useParams, useLocation } from "react-router-dom";

function ModeratorDetails() {
  // Utilisez useLocation pour obtenir l'objet de localisation actuel
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

  return (
    <>
      <NavBarMod />
      <div className="sm:mt-[84px] mt-[65px]">
        <DetailsMod
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

export default ModeratorDetails;
