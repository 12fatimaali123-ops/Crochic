import React from 'react';
import { Link } from 'react-router-dom';
import about from "../assests/about.gif";
import '../styles/home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const About = () => {
  return( 
  <section className="about-section">
          <div className="about-image">
            <img src={about} alt="Yarn and crochet tools" />
          </div>
          
          <div className="about-text">
            <h2>About Crochic</h2>
  
            <p>
              We turn yarn into heirlooms. Every stitch is crafted with patience,
              passion, and the softest materials. Crochic was born from a love of
              slow fashion and handmade treasures.
            </p>
  
            <p>
              From cozy blankets to playful amigurumi, our pieces add warmth and
              personality to your life. We also offer custom designs — just tell us
              your idea!
            </p>
  
            <button className="soft-btn"><Link to="/Contact" className="shop-link">Custom order</Link></button>
              <br></br>

          </div>
          
        </section>

)};

export default About;