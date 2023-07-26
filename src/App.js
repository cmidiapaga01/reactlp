import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <About/>
    </div>
  );
}

export default App;
