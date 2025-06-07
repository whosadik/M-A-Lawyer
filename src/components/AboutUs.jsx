import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import au from "../assets/aboutus.png";
import { FaCheck } from "react-icons/fa";

export default function AboutCompany() {
  const points = [
    "10+ лет успешной юридической практики",
    "Профильные юристы под каждую задачу",
    "Гарантируем конфиденциальность и прозрачность",
    "Прямое сопровождение без посредников",
    "Глубокая специализация в M&A, арбитраже и корпоративном праве",
    "Работаем по всей стране и за рубежом",
  ];
  return (
    <>
      <motion.section
        className="advantages-simple"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="advantages-simple__container">
          <motion.h2
            className="advantages-simple__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Наши сильные стороны
          </motion.h2>

          <motion.p
            className="advantages-simple__lead"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Мы не просто оказываем юридические услуги — мы строим долгосрочные
            отношения на основе доверия, компетентности и результатов.
          </motion.p>

          <div className="advantages-simple__list">
            {points.map((item, idx) => (
              <motion.div
                className="adv-item"
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaCheck className="adv-item__icon" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <section className="about-modern" id="about">
        <div className="about-modern__container">
          <motion.div
            className="about-modern__image-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={au} alt="Юристы за работой" />
            <div className="about-modern__call-box">
              <span>Связаться в любое время</span>
              <strong>+7 (700) 716 1879</strong>
            </div>
          </motion.div>

          <motion.div
            className="about-modern__text-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="about-modern__label">О нас</span>
            <h2>
              Мы защищаем ваши интересы <br /> с полной юридической отдачей.
            </h2>
            <p className="about-modern__description">
              Более 10 лет мы сопровождаем сделки, урегулируем споры и
              обеспечиваем юридическую безопасность бизнеса и частных клиентов.
              В нашей практике — внимание к деталям, стратегическое мышление и
              честность.
            </p>

            <ul className="about-modern__list">
              <li>✔ Опыт сопровождения сделок на сумму от $500K до $20M</li>
              <li>✔ Защита в арбитражных судах по всей стране</li>
              <li>
                ✔ Сильная внутренняя экспертиза в налоговом и корпоративном
                праве
              </li>
            </ul>

            <a className="about-modern__button" href="#services">
              Подробнее о нас ↗
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
