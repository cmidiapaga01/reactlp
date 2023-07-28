import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Qualities from "./components/qualities/Qualities";
import Features from "./components/features/Features";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
