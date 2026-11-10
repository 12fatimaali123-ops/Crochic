import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../styles/home.css';
import card from "../assests/cardi.png";
import blan from "../assests/blan.png";
import am from "../assests/am.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CiPhone } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import about from "../assests/about.gif";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "How long does a custom order take?",
      answer:

        "Preparation time depends on the size and details of your crochet piece. Contact us for an estimated timeline."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship internationally."
    },
    {
      question: "What yarn materials do you use?",
      answer: "We use soft cotton, acrylic, and eco-friendly yarn."
    },
    {
      question: "Can I request a completely unique pattern?",
      answer: "Yes, you can request your own design, colors, and size."
    }
  ];

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };
  const getFaqButtonClass = (index) => {
    if (openQuestion === index) {
      return "faq-question active";
    }

    return "faq-question";
  };

  const getFaqArrow = (index) => {
    if (openQuestion === index) {
      return <BiSolidUpArrow />;
    }

    return <BiSolidDownArrow />;
  };

  return (
    <div className="home-page">


      <section className="hero-section">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={blan} className="d-block w-100" alt="Crochet blankets" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Handmade With Love</h5>
                <p>Soft, sustainable, unique pieces for you.</p>

              </div>
            </div>

            <div className="carousel-item">
              <img src={card} className="d-block w-100" alt="Amigurumi" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Adorable Amigurumi</h5>
                <p>Gifts that bring joy.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={am} className="d-block w-100" alt="Custom crochet" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Made Just For You</h5>
                <p>Colors, sizes, designs – you choose.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </section>


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

          <div className="about-actions">
            <Link to="/shop" className="about-shop-btn">
              Shop Now
            </Link>

            <Link to="/contact" className="about-custom-btn">
              Custom Order
            </Link>
          </div>        </div>
      </section>


      <section className="pricing-section">
        <h2>Simple Pricing</h2>

        <div className="pricing-cards">
          <div className="price-card">
            <h3>Mini Collection</h3>
            <h1>$29</h1>
            <p>✓ 1 small amigurumi</p>
            <p>✓ 1 beanie / headband</p>
            <p>✓ Free pattern</p>
            <button className="soft-btn"><Link to="/Contact" className="shop-link">Choose plan</Link></button>
          </div>

          <div className="price-card special-card">
            <h3>Signature Box</h3>
            <h1>$79</h1>
            <p>✓ 2 wearables or decor</p>
            <p>✓ 1 amigurumi or gift wrap</p>
            <p>✓ Priority custom slot</p>
            <button className="soft-btn"><Link to="/Contact" className="shop-link">Most popular</Link></button>
          </div>

          <div className="price-card">
            <h3>Ultimate Bundle</h3>
            <h1>$149</h1>
            <p>✓ Full custom set</p>
            <p>✓ Express making</p>
            <p>✓ Lifetime support & repair</p>
            <button className="soft-btn"><Link to="/Contact" className="shop-link">Contact us</Link></button>
          </div>
        </div>
      </section>


      <section className="collections-section">
        <h2>Our Collections</h2>

        <div className="collection-cards">
          <div className="collection-card">
            <div className="icon">⌘</div>
            <h3>Wearables</h3>
            <p>Cardigans, beanies, scarves — stylish and warm.</p>
            <button className="soft-btn"><Link to="/Shop" className="shop-link"> Shop now </Link></button>
          </div>

          <div className="collection-card">
            <div className="icon">☺</div>
            <h3>Amigurumi</h3>
            <p>Cute crochet plushies and keychains.</p>
            <button className="soft-btn"><Link to="/Shop" className="shop-link">See toys</Link></button>
          </div>

          <div className="collection-card">
            <div className="icon">✿</div>
            <h3>Custom</h3>
            <p>Your design, your colors, your size.</p>
            <button className="soft-btn"><Link to="/Contact" className="shop-link">Request</Link></button>
          </div>
        </div>
      </section>


      <section className="craft-section">
        <h2>Our Craftsmanship</h2>

        <div className="skills">
          <div className="skill">
            <p>Quality & Stitch Precision <span>98%</span></p>
            <div className="bar">
              <div className="fill fill98"></div>
            </div>
          </div>

          <div className="skill">
            <p>On-time Delivery <span>97%</span></p>
            <div className="bar">
              <div className="fill fill97"></div>
            </div>
          </div>

          <div className="skill">
            <p>Custom Design Flexibility <span>95%</span></p>
            <div className="bar">
              <div className="fill fill95"></div>
            </div>
          </div>

          <div className="skill">
            <p>Customer Happiness <span>99%</span></p>
            <div className="bar">
              <div className="fill fill99"></div>
            </div>
          </div>

          <div className="skill">
            <p>Eco-friendly Materials <span>90%</span></p>
            <div className="bar">
              <div className="fill fill90"></div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 bg-soft">
        <div className="container">
          <h2 className="text-center bold">What customers say</h2>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="testimonial-card text-center mx-auto"

                >
                  <i
                    className="bi bi-chat-quote fs-1"

                  ></i>
                  <p className="mt-3">
                    “The blanket I ordered is absolutely stunning – so soft and
                    beautifully made. Crochic exceeded my expectations!”
                  </p><br></br>
                  <h6 className="fw-bold">— Sara k.</h6>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="testimonial-card text-center mx-auto"

                >
                  <i
                    className="bi bi-chat-quote fs-1"

                  ></i>
                  <p className="mt-3">
                    “My daughter loves her custom bunny amigurumi. The attention to
                    detail is incredible.”
                  </p><br></br>
                  <h6 className="fw-bold">— Kawthar M.</h6>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="testimonial-card text-center mx-auto"
                >
                  <i
                    className="bi bi-chat-quote fs-1"
                  ></i>
                  <p className="mt-3">
                    “Fast shipping, eco packaging, and the colors were exactly as I
                    requested. Will order again!”
                  </p><br></br>
                  <h6 className="fw-bold">— Fatima A.</h6>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-secondary rounded-circle"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-secondary rounded-circle"></span>
            </button>
          </div>
        </div>
      </section>


      <section className="rating-section">
        <h2>User Rating</h2>

        <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <p className="rating-text">4.5 average based on 1500 reviews.</p>

        <div className="rating-row">
          <span>5 star</span>
          <div className="rating-bar">
            <div className="rating-fill five"></div>
          </div>
          <span>1000</span>
        </div>

        <div className="rating-row">
          <span>4 star</span>
          <div className="rating-bar">
            <div className="rating-fill four"></div>
          </div>
          <span>300</span>
        </div>

        <div className="rating-row">
          <span>3 star</span>
          <div className="rating-bar">
            <div className="rating-fill three"></div>
          </div>
          <span>150</span>
        </div>

        <div className="rating-row">
          <span>2 star</span>
          <div className="rating-bar">
            <div className="rating-fill two"></div>
          </div>
          <span>25</span>
        </div>

        <div className="rating-row">
          <span>1 star</span>
          <div className="rating-bar">
            <div className="rating-fill one"></div>
          </div>
          <span>75</span>
        </div>
      </section>


      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={getFaqButtonClass(index)}
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span>{getFaqArrow(index)}</span>
            </button>

            {openQuestion === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="contact-section">
        <h2>Let’s stitch something together</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p>
              Have a question or ready to place a custom order? Fill out the
              form and we will reply within 24h.
            </p>

            <p><MdOutlineEmail /> crochet.by.fatima17@gmail.com</p>
            <p><CiPhone /> +961 78 843 585</p>
            <p><InstagramIcon />@CROCHET.BY.FATIMA17</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Tell me about your crochet dream..."></textarea>

            <button type="button" className="soft-btn"><a href=""></a>Place Order</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;