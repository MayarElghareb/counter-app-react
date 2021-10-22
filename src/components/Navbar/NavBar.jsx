import { Link } from "react-router-dom";
import "./NavbarStyle.css";
function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav  ">
          <ul className="d-flex gap-4 mt-3">
            <li>
              {" "}
              <Link to="/">Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/shop">Shop </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/count">Counter </Link>{" "}
            </li>
            <li>
              <Link to ="/todo">ToDolist</Link>
            </li>
            <li>
              <Link to ="/login">Login</Link>
            </li>
            <li>
              <Link to ="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default MyNav;
