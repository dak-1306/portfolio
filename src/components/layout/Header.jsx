import React from "react";
import { Link } from "react-router-dom";
import { header } from "../../data/dataPortfolio.js";
import Tooltip from "../common/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const { title, home, about, skills, projects, contact } = header;

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
            <Link to="/#about" aria-label={about}>
              <FontAwesomeIcon icon={["fas", "user"]} />
            </Link>
          </Tooltip>

          <Tooltip label={skills}>
            <Link to="/#skills" aria-label={skills}>
              <FontAwesomeIcon icon={["fas", "code"]} />
            </Link>
          </Tooltip>

          <Tooltip label={projects}>
            <Link to="/#projects" aria-label={projects}>
              <FontAwesomeIcon icon={["fas", "briefcase"]} />
            </Link>
          </Tooltip>

          <Tooltip label={contact}>
            <Link to="/#contact" aria-label={contact}>
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </Link>
          </Tooltip>
        </ul>
      </nav>
    </header>
  );
}
