import React from "react";

//Global Styles

import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
