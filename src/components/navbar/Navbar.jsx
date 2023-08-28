import "./navbar.css";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Navbar = ({ setCat }) => {
  return (
    <div className="navbar ">
      <Link to="/" className="left-navbar" onClick={() => setCat("all")}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className="">
        <li>
          <Link to="/" onClick={() => setCat("all")}>
            Home
          </Link>
        </li>
        <li>
          <a href="#exercises">Exercises</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
