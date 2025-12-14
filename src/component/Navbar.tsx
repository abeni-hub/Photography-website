import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>My Photography</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
