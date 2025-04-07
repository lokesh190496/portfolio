import React, { useRef } from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { homeRef, aboutRef, experienceRef, skillsRef, testimonialsRef, contactRef };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <Container>
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={contactRef}><Contact /></div>
      </Container>
    </>
  );
};

export default App;