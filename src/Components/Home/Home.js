import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import CartAndOrder from "../CartAndOrder/CartAndOrder";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Catalog />
      <CartAndOrder />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
