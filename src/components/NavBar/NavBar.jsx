import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navb py-2 px-3">
        <nav className="navb navbar navbar-expand-lg sticky-top px-5 ">
          <div className="container-fluid d-flex justify-content-between">
            <Link className="navbar-brand text-white  px-2 fs-3 " to="/home">
              START REACT
            </Link>
            <button
              className="navbar-toggler display-flex align-items-center p-2 text-white  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <span className="navbar-toggler-icon white"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white activeButton mr-3"
                    aria-current="page"
                    to="/home"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
