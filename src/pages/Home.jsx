import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Hero from "./Hero";
import Contact from "./Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const idFromState = location.state?.scrollTo;
    const idFromHash = location.hash ? location.hash.replace("#", "") : null;
    const id = idFromState || idFromHash;
    if (!id) return;

    // delay nhẹ để DOM đã mount xong
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      // scroll target to vertical center of the nearest scrollable ancestor (main)
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      // optional: clear history state/hash if you don't want repeated scroll on back
      try {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname + (idFromHash ? `#${idFromHash}` : "")
        );
      } catch {}
    }, 60);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <MainLayout>
      <div id="hero" className="w-full">
        <Hero />
      </div>

      <div id="about" className="w-full">
        <About />
      </div>

      <div id="skills" className="w-full">
        <Skills />
      </div>

      <div id="projects" className="w-full">
        <Projects />
      </div>

      <div id="contact" className="w-full">
        <Contact />
      </div>
    </MainLayout>
  );
}
