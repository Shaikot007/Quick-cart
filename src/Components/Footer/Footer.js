import React from "react";
import "./Footer.scss";
import Facebook from "../../Assets/Images/Facebook.png";
import Instagram from "../../Assets/Images/Instagram.jpg";
import Twitter from "../../Assets/Images/Twitter.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSocial">
        <div className="SocialIcon">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
        <div className="SocialIcon">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
        <div className="SocialIcon">
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="FooterCopyRight">
          <p>© 2020 QuickCart</p>
          <p>Create by <a href="https://github.com/Shaikot007" target="_blank" rel="noreferrer">Shaikot</a></p>
        </div>
    </div>
  );
};

export default Footer;
