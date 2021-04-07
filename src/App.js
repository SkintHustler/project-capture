import React from "react";
//Global Style
import GlobalStyle from "../src/components/GlobalStyle";
// import Pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./Pages/ConactUs";
import OurWork from "./Pages/OurWork";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
