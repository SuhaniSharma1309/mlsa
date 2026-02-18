import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/team">Team</Link> |{" "}
      <Link to="/events">Events</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/about-mlsa">About MLSA</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
