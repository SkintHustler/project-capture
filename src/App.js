import React from "react";
//Global Style
import GlobalStyle from "../src/components/GlobalStyle";
// import Pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
