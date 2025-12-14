import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Photography Logo" />
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
