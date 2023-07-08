import React, { useState } from "react";
// import cam from "./cam.png";
import Image2 from "./pic2.jpg";
import Image1 from "./pic1.jpg";
import Image3 from "./pic3.jpg";
import Image4 from "./pic4.jpg";
import Image5 from "./pic5.jpg";
import Image6 from "./pic6.jpg";


import "./accordion.css";

const cards = [
  {
    header: "India",
    image: Image1,
    text: "Image text Here",
  },
  {
    header: "India",
    image: Image2,
    text: "Image text Here",
  },
  {
    header: "India",
    image: Image3,
    text: "Image text Here",
  },
  {
    header: "India",
    image: Image4,
    text: "Image text Here",
  },
  {
    header: "India",
    image: Image5,
    text: "Image text Here",
  },
  {
    header: "India",
    image: Image6,
    text: "Image text Here",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(0);
  return (
    <section>
      {cards.map((card, index) => (
        <article
          key={card.image}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
        >
          <img src={card.image} alt="landscape" />
          <div className="content">
            <span></span>
            <div>
              <h2>{card.header}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Accordion;
