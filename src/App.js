import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
    </div>
  );
}

export default App;
