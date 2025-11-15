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

    // small delay so nested components mount and elements exist
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      // optional: clear history.state to avoid repeated scrolling on back/forward
      try {
        const url = window.location.pathname + (location.hash ? "" : "");
        window.history.replaceState({}, document.title, url);
      } catch (e) {
        /* ignore */
      }
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
