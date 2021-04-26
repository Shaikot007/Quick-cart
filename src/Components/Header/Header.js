import React from "react";
import "./Header.scss";
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
          <p>QuickCart</p>
          <p>Order now</p>
        </div>
      </div>
      <div className="HeaderRight">
        <Button>
          <FontAwesomeIcon className="Shopping-cart" icon="shopping-cart" size="lg" />
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Header;
