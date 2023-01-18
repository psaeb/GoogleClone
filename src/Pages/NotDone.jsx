import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./NotDone.css";

function NotDone() {
  return (
    <div className="NotDone">
      <h1 className="NotDone__title">
        Hello the route you accessed wasn't planned to be done!
      </h1>
      <Link to={"/"}>
        <Button
          className="NotDone__button"
          color="customBlack"
          variant="contained"
        >
          <h1 className="NotDone__button--text">{`Go Back :)`}</h1>
        </Button>
      </Link>
    </div>
  );
}

export default NotDone;
