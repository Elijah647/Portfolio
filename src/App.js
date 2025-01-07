// src/App.js
import React from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <div className="mx-10 md:mx-24">
        <section id="aboutMe">
          <AboutMe />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
