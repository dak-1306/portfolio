import { Link } from "react-router-dom";
import { header } from "../../data/dataPortfolio.js";
import Tooltip from "../common/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const { title, home, about, projects, contact } = header;
  return (
    <header
      style={{ background: "var(--color-header)" }}
      className="w-full flex justify-between items-center p-4 text-white"
    >
      <h1 className="text-lg font-bold">{title}</h1>
      <nav>
        <ul className="flex space-x-7 text-sm mr-6">
          <Link to="/">
            <Tooltip
              children={<FontAwesomeIcon icon={["fas", "home"]} />}
              label={home}
            ></Tooltip>
          </Link>

          <Link to="/about">
            <Tooltip
              children={<FontAwesomeIcon icon={["fas", "user"]} />}
              label={about}
            ></Tooltip>
          </Link>

          <Link to="/projects">
            <Tooltip
              children={<FontAwesomeIcon icon="briefcase" />}
              label={projects}
            ></Tooltip>
          </Link>

          <Link to="/contact">
            <Tooltip
              children={<FontAwesomeIcon icon="envelope" />}
              label={contact}
            ></Tooltip>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
