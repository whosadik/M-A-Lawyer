import React from "react";
import "./FreeCons.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import step1 from "../assets/time.jpg";
import step2 from "../assets/meet.jpg";
import step3 from "../assets/plan.jpg";

export default function ConsultationSteps() {
  const steps = [
    {
      img: step1,
      title: "Запланируйте встречу",
      desc: "Выберите удобное время и мы закрепим за вами личного консультанта.",
    },
    {
      img: step2,
      title: "Встреча с юристом",
      desc: "На онлайн или офлайн-консультации мы разберём вашу ситуацию и предложим варианты.",
    },
    {
      img: step3,
      title: "План успеха",
      desc: "Вы получите стратегию решения с чёткими этапами и юридическим сопровождением.",
    },
  ];

  return (
    <section className="consultation-steps">
      <div className="consultation-steps__container">
        <motion.div
          className="consultation-steps__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="label">Бесплатная консультация</span>
          <h2>Как проходит консультация</h2>
        </motion.div>

        <div className="consultation-steps__grid-line">
          {steps.map((step, idx) => (
            <div className="consultation-steps__item-wrapper" key={idx}>
              <motion.div
                className="consultation-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="step-image">
                  <img src={step.img} alt={step.title} />
                  <div className="step-badge">0{idx + 1}</div>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>

              {/* стрелка между блоками */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * idx + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FaArrowRight />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
