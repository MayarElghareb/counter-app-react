import { Link } from "react-router-dom";
import "./NavbarStyle.css";
function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand container" href="#">
        Logo
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center container"
        id="navbarNavDropdown"
      >
        <div className="navbar-nav  ">
          <ul className="d-flex gap-4 mt-3">
            <li class="nav-item">
              {" "}
              <Link to="/">Home </Link>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <Link to="/shop">Shop </Link>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <Link to="/count">Counter </Link>{" "}
            </li>
            <li class="nav-item">
              <Link to="/todo">ToDolist</Link>
            </li>
            <li class="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default MyNav;
