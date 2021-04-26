import React from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo.svg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="Header">
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
    </div>
  );
};

export default Header;
