import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Home from "./Components/Home/Home";

import {
  faPlusCircle,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faPlusCircle
);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
