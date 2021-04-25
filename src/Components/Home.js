import React from "react";
import "./Home.css";
import Logo from "../Images/logo.svg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="Home">
      <section className="Header">
        <div className="HeaderLeft">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="HeaderText">
            <p>QuickCart - One Page</p>
            <p>eCommerce React Js Template</p>
          </div>
        </div>
        <div className="HeaderRight">
          <Button>
            <FontAwesomeIcon className="Shopping-cart" icon="shopping-cart" size="sm" />
            Cart
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
