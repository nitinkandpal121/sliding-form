import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServiceCarousel.css"; // ✅ correct import (match your css filename)

const cards = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
  "Service 7",
  "Service 8",
  "Service 9",
  "Service 10",
  "Service 11",
  "Service 12",
  "Service 13",
  "Service 14",
  "Service 15",
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  const paginate = (direction) => {
    if (direction === 1 && current < cards.length - 1) {
      setCurrent(current + 1);
    } else if (direction === -1 && current > 0) {
      setCurrent(current - 1);
    }
  };

  const jumpTo = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-card-wrapper">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="carousel-card"
          >
            <h2 className="card-title">{cards[current]}</h2>
            <p className="card-description">Description of {cards[current]}</p>
          </motion.div>
        </AnimatePresence>

        {/* Left and Right Clickable Areas */}
        <div
          className="click-area-left"
          onClick={() => paginate(-1)}
        />
        <div
          className="click-area-right"
          onClick={() => paginate(1)}
        />
      </div>

      {/* Dots Indicator */}
      <div className="dots-wrapper">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => jumpTo(index)}
          />
        ))}
      </div>

      {/* Service Line Buttons */}
      <div className="service-buttons">
        {cards.map((title, index) => (
          <button
            key={index}
            className="service-button"
            onClick={() => jumpTo(index)}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
