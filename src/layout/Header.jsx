import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
