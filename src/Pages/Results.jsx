import { Link } from "react-router-dom";
import "./Results.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
import GoogleLogo from "../assets/googlelogo.png";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import { v1 as uuidv1 } from "uuid";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@mui/icons-material";

function Results() {
  const [{ term }, dispatch] = useStateValue();
  const tempId = uuidv1();

  const { data } = useGoogleSearch(term);


  return (
    <div className="resultPage">
      <div className="resultPage__header">
        <Link className="resultPage__logo--container" to="/">
          <img src={GoogleLogo} alt="" className="resultPage__logo" />
        </Link>
        <div className="resultPage__headerBody">
          <Search hideButtons />
          <div className="resultPage__options">
            <div className="resultPage__optionsLeft">
              <div className="resultPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="resultPage__option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div className="resultPage__option">
                <Image />
                <Link to="/all">Images</Link>
              </div>
              <div className="resultPage__option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="resultPage__option">
                <Room />
                <Link to="/all">Maps</Link>
              </div>
              <div className="resultPage__option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="resultPage__optionsRight">
              <div className="resultPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="resultPage__option">
                <Link to="/settings">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="resultPage__results">
          <div className="resultPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} Results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </div>

          {data?.items.map((res) => (
            <div className="result__item" key={res.cacheId || tempId}>
              <a href={res.link} className="result__sub-title">
                {res.pagemap?.cse_image?.length > 0 &&
                  res.pagemap?.cse_image[0]?.src && (
                    <img
                      className="result__image"
                      src={res.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                <h3>{res.displayLink}</h3>
              </a>
              <a href={res.link} className="result__title">
                <h2>{res.title}</h2>
              </a>

              <p className="result__snippet">{res.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
