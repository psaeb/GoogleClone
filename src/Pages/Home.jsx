import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import GoogleLogo from "../assets/googlelogo.png";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <nav className="home__navbar--container">
        <div className="home__navbar">
          <ul className="home__navbar--left home__navbar--item-container">
            <div className="home__navbar--link">
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>
            </div>
          </ul>
          <ul className="home__navbar--right home__navbar--item-container">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon className="mui__icons" />
            <Avatar className="mui__icons" />
          </ul>
        </div>
      </nav>

      <div className="home__body">
        <img src={GoogleLogo} className="home__logo" />
        <div className="home__input-container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
