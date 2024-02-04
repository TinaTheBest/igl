import NavBar from "../../Components.jsx/navbar";
import Details from "../../Components.jsx/details";
import { useLocation } from "react-router";
/**
 * Page pour afficher les détails d'un article pour l'utilisateur.
 * @component
 */
function UserDetails() {
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
  } = state ? state.article : {};

  return (
    <>
      <NavBar />
      <div className="sm:mt-[84px] mt-[65px]">
        <Details
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
export default UserDetails;
