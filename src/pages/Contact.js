import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import {CiPhone} from "react-icons/ci"
import {MdOutlineEmail} from "react-icons/md"



const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Thanks ${form.name || "there"}! We'll reply within 24h. 🧶`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    


      <section className="contact-section">
        <div>
         
          <h1 className="contact-heading script">
            Let's stitch something together
          </h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Have a question or ready to place a custom order? Fill out the
              form and we'll reply within 24h.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon"><MdOutlineEmail/></span>
              crochet.by.fatima.17@gmail.com
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><CiPhone/></span>
              +961 78 843 155
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><InstagramIcon /> </span>
              @CROCHET.BY.FATIMA.17
            </div>
          </div>

          <div className="contact-form">
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your crochet dream..."
              value={form.message}
              onChange={handleChange}
            />
            <button className="btn-order" onClick={handleSubmit}>
              🧺 Place Order
            </button>
          </div>
        </div>
        
      </section>
  
  );
  
};
export default  Contact ;