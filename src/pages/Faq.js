import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Faq.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [

    {

      question: "How long does a custom order take?",

      answer: "Custom orders usually take 5 to 10 days depending on the size and details of the crochet piece.",

    },

    {

      question: "Do you ship internationally?",

      answer: "Yes, international shipping is available. Shipping time depends on your country.",

    },

    {

      question: "What yarn materials do you use?",

      answer: "I use soft and high-quality yarn such as cotton, acrylic, and blended yarn depending on the item.",

    },

    {

      question: "Can I request a completely unique pattern?",

      answer: "Yes, you can request a special design, color, size, or idea made just for you.",

    },

    {

      question: "What is your return policy?",

      answer: "Because most items are handmade or customized, returns are only accepted if the item arrives damaged.",

    },

    {

      question: "What payment methods do you accept?",

      answer: "Payment methods can include cash, transfer, or other available local payment options.",

    },

    {

      question: "Can you rush my order?",

      answer: "Yes, rush orders may be possible depending on the current workload.",

    },

    {

      question: "Can I choose my own colors or yarn type?",

      answer: "Yes, you can choose your preferred colors and yarn type before the order starts.",

    },

    {

      question: "How do I wash my crochet item?",

      answer: "Hand wash gently with cold water and mild soap, then let it air dry flat.",

    },

    {

      question: "What if my item arrives damaged or doesn't fit?",

      answer: "Please contact me with a photo, and I will help you find the best solution.",

    },

    {

      question: "Do you offer discounts for bulk orders, e.g. wedding favors, gifts?",

      answer: "Yes, discounts are available for bulk orders depending on the quantity and design.",

    },

    {

      question: "Can you send the item as a gift directly to someone?",

      answer: "Yes, I can send it as a gift and include a small note if you want.",

    },

    {

      question: "Do you sell crochet patterns, or only finished items?",

      answer: "At the moment, the main focus is finished handmade crochet items.",

    },

    {

      question: "Is your yarn sustainable or vegan?",

      answer: "Some yarn options can be sustainable or vegan. You can ask before placing your order.",

    },

    {

      question: "Will I receive a tracking number?",

      answer: "Yes, if the shipping service provides tracking, you will receive a tracking number.",

    },

  ];
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const getFaqButtonClass = (index) => {
    if (openIndex === index) {
      return "faq-question active";
    }

    return "faq-question";
  };

  const getFaqArrow = (index) => {
    if (openIndex === index) {
      return <BiSolidUpArrow />;
    }

    return <BiSolidDownArrow />;
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={getFaqButtonClass(index)}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span>{getFaqArrow(index)}</span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;