import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchButton = (e) => {
    e.preventDefault();

    console.log("Search button hit", search);

    navigate("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: search,
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <MicIcon className="search__icon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="customGrey"
          >
            Google Search
          </Button>
          <Button variant="outlined" color="customGrey">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons sb__hidden">
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="customGrey"
          >
            Google Search
          </Button>
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="customGrey"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
