import React from "react";

import Home from "./Home";
import About from "./About";


import user from "../data/user";


function App() {
  return (
    <div>
      <nav>Navigation Bar</nav>
      <div id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </div>
      <div id="about">
        <About bio={user.bio} links={user.links} />
      </div>
    </div>
  );
}

export default App;
