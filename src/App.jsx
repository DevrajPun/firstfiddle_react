import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home from "./components/Home";
import About from "./components/About";
import Brand from "./components/Brand";
import Team from "./components/Team";
import Press from "./components/Press";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import ScrollToTop from "./assets/main.js";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/team" element={<Team />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
