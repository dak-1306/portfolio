import { Link } from "react-router-dom";
import Tooltip from "../common/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header
      style={{ background: "var(--color-header)" }}
      className="w-full flex justify-between items-center p-4 text-white"
    >
      <h1 className="text-lg font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-7 text-sm mr-6">
          <Link to="/">
            <Tooltip
              children={<FontAwesomeIcon icon="home" />}
              label="Home"
            ></Tooltip>
          </Link>

          <Link to="/about">
            <Tooltip
              children={<FontAwesomeIcon icon="user" />}
              label="About"
            ></Tooltip>
          </Link>

          <Link to="/projects">
            <Tooltip
              children={<FontAwesomeIcon icon="briefcase" />}
              label="Projects"
            ></Tooltip>
          </Link>

          <Link to="/contact">
            <Tooltip
              children={<FontAwesomeIcon icon="envelope" />}
              label="Contact me"
            ></Tooltip>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
