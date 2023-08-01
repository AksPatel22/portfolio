import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Qualifications from "./Qualifications/Qualifications";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";

const App = () => {
  return (
    <div id="theme-two-wrapper">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </div>
  );
};

export default App;
