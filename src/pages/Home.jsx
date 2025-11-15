import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Hero from "./Hero";
import Contact from "./Contact";

/*
  Home:
  - mỗi page component được nhúng tại một wrapper <div id="..."> để scroll target hoạt động
  - đọc location.state / hash khi mounted và scroll tới section tương ứng
*/

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const idFromState = location.state?.scrollTo;
    const idFromHash = location.hash ? location.hash.replace("#", "") : null;
    const id = idFromState || idFromHash;
    if (id) {
      // slight delay so DOM of nested components is ready
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
    // optional: clear history state if desired
    // window.history.replaceState({}, document.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <MainLayout>
      {/* Hero (id=hero) */}
      <div id="hero" className="w-full">
        <Hero />
      </div>

      {/* About */}
      <div id="about" className="w-full">
        <About />
      </div>

      {/* Skills */}
      <div id="skills" className="w-full">
        <Skills />
      </div>

      {/* Projects */}
      <div id="projects" className="w-full">
        <Projects />
      </div>

      {/* Contact (can be separate route too) */}
      <div id="contact" className="w-full">
        <Contact />
      </div>
    </MainLayout>
  );
}
