import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import CartAndOrder from "../CartAndOrder/CartAndOrder";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Catalog />
      <CartAndOrder />
    </div>
  );
};

export default Home;
