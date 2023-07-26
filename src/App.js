import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from './components/about/About'
import Qualities from './components/qualities/Qualities'

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <About/>
      <Qualities/>
    </div>
  );
}

export default App;
