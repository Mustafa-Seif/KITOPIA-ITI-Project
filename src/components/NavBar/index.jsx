import "./NavBar.scss";
import logo from "../../assets/images/navbar/logo-png.png";
import {
  FaHome,
  FaVideo,
  FaBookReader,
  FaGamepad,
  FaSignInAlt,
} from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="!#">
            <img src={logo} alt="KITOPIA" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#!">
                  <FaHome />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="!#">
                  <FaVideo />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="!#">
                  <FaBookReader />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="!#">
                  <FaGamepad />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="!#">
                  <SiGnuprivacyguard />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="!#">
                  <FaSignInAlt />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
