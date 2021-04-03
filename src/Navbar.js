import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ammar Website</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/create">new Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
