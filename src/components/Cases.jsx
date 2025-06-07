import "./Cases.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import case1 from "../assets/aps.jpg";
import case2 from "../assets/auto.jpg";
import case3 from "../assets/money.jpg";
import case4 from "../assets/auto2.jpg";
import case5 from "../assets/kzt.jpeg";
import case6 from "../assets/money.jpg";
import case7 from "../assets/shtraff.png";
import case8 from "../assets/kzt.jpeg";

const cases = [
  {
    image: case1,
    title: "Конфликт с арендодателем",
    amount: "2.750.000 ₸",
    result: "Мы взыскали клиенту",
  },
  {
    image: case2,
    title: "Страховая компания",
    amount: "467.647 ₸",
    result: "Мы выиграли 1.265.941 ₸",
    note: "+ полное возмещение суммы за оценку",
  },
  {
    image: case3,
    title: "Взыскание ущерба",
    amount: "13.700.000 ₸",
    result: "Мы взыскали клиенту",
  },
  {
    image: case4,
    title: "Авария / споры со страховкой",
    amount: "481.895 ₸",
    result: "Мы выиграли 1.041.674 ₸",
    note: "+ полное возмещение суммы за оценку",
  },
  {
    image: case5,
    title: "Юридическое взыскание",
    amount: "1.000.000 ₸",
    result: "Мы взыскали клиенту",
  },
  {
    image: case6,
    title: "Возврат долга через суд",
    amount: "5.500.000 ₸",
    result: "Мы взыскали клиенту",
  },
  {
    image: case7,
    title: "Оспаривание штрафов",
    amount: "130.000 ₸",
    result: "Штраф отменён через суд",
  },
  {
    image: case8,
    title: "Банкротство физ. лица",
    amount: "0 ₸",
    result: "Полное списание долгов",
  },
];

export default function CaseCarousel() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (trackRef.current) {
      const scrollLeft = trackRef.current.scrollLeft;
      const cardWidth = 320; // approx card width incl. gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", handleScroll);
      return () => track.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const totalPages = Math.ceil(cases.length - 0.5); // for better rounding

  return (
    <section className="cases-carousel" id="cases">
      <div className="cases-carousel__container">
        <motion.h2
          className="cases-carousel__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Наши кейсы
        </motion.h2>

        <div className="cases-carousel__wrapper">
          <button
            onClick={() => scroll("left")}
            className="carousel-arrow side left"
          >
            <FaChevronLeft />
          </button>

          <div className="cases-carousel__track" ref={trackRef}>
            {cases.map((item, idx) => (
              <motion.div
                className="case-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="case-card__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4 className="case-card__title">{item.title}</h4>
                <p className="case-card__amount">{item.amount}</p>
                {item.result && (
                  <div className="case-card__result">
                    {item.result.includes("выиграли") ? (
                      <strong className="gold-label">{item.result}</strong>
                    ) : (
                      <span>{item.result}</span>
                    )}
                  </div>
                )}
                {item.note && <p className="case-card__note">{item.note}</p>}
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="carousel-arrow side right"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Индикаторы */}
        <div className="carousel-dots">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
