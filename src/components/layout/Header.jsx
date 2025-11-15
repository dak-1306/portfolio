import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { header } from "../../data/dataPortfolio.js";
import Tooltip from "../common/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const { title, home, about, skills, projects, contact } = header;
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavToSection = (e, sectionId) => {
    // preserve native link semantics but handle single-page scroll when on Home
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // navigate to home and instruct it to scroll after mount
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header
      style={{ background: "var(--color-header)" }}
      className="w-full flex justify-between items-center p-4 text-white"
    >
      <h1 className="text-lg font-bold">{title}</h1>
      <nav>
        <ul className="flex space-x-7 text-sm mr-6 list-none">
          <Tooltip label={home}>
            <Link to="/" aria-label={home}>
              <FontAwesomeIcon icon={["fas", "home"]} />
            </Link>
          </Tooltip>

          <Tooltip label={about}>
            {/* use anchor semantics but intercept click */}
            <a
              href="/#about"
              onClick={(e) => handleNavToSection(e, "about")}
              aria-label={about}
            >
              <FontAwesomeIcon icon={["fas", "user"]} />
            </a>
          </Tooltip>

          <Tooltip label={skills}>
            <a
              href="/#skills"
              onClick={(e) => handleNavToSection(e, "skills")}
              aria-label={skills}
            >
              <FontAwesomeIcon icon={["fas", "code"]} />
            </a>
          </Tooltip>

          <Tooltip label={projects}>
            <a
              href="/#projects"
              onClick={(e) => handleNavToSection(e, "projects")}
              aria-label={projects}
            >
              <FontAwesomeIcon icon={["fas", "briefcase"]} />
            </a>
          </Tooltip>

          <Tooltip label={contact}>
            <Link to="/contact" aria-label={contact}>
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </Link>
          </Tooltip>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
