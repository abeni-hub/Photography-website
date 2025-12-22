import "./Navbar.css";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          <img src={logo} alt="Photography Logo" />
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
