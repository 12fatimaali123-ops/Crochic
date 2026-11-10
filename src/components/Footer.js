import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-logo">Crochic</h2>
        <p>
          Handcrafted crochet with love and patience.
          <br />
          Every piece tells a story.
        </p>
      </div>

      <div className="footer-section footer-center">
        <h3>Follow us</h3>
        <div className="footer-icons">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        
      </div>

      <div className="footer-section footer-right">
        <p className="footer-script">Stitched with love, made for you</p>
        <p className="footer-script">Crochic: Where yarn becomes elegance</p>

      </div>

    </footer >
  );
};

export default Footer;