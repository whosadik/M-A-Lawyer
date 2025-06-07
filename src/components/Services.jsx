import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ExpandableServices.css";
import {
  FaGavel,
  FaHandshake,
  FaBalanceScale,
  FaRegBuilding,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <FaGavel />,
      title: "Судебное представительство",
      description:
        "Представляем интересы клиентов в арбитражах, судах общей юрисдикции и государственных органах.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Корпоративное право",
      description:
        "Сопровождение создания, реорганизации, ликвидации юридических лиц, договорное право.",
    },
    {
      icon: <FaRegBuilding />,
      title: "Сопровождение сделок",
      description:
        "Анализ и поддержка сделок купли-продажи, аренды, строительства и инвестирования.",
    },
    {
      icon: <FaUsers />,
      title: "Семейные и наследственные дела",
      description: "Раздел имущества, брачные договоры, наследственные споры.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Страховое и потребительское право",
      description:
        "Разрешение конфликтов со страховыми, банками и защиту прав потребителей.",
    },
    {
      icon: <FaHandshake />,
      title: "Медиация и досудебные споры",
      description:
        "Урегулирование конфликтов до суда: переговоры, соглашения, примирительные процедуры.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="services-modern" id="services">
      <div className="services-modern__container">
        <motion.div
          className="services-modern__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="label">Наши услуги</span>
          <h2>Надёжная юридическая помощь в ключевых сферах</h2>
          <p>
            Оказываем профессиональную поддержку частным и корпоративным
            клиентам по всей стране.
          </p>
        </motion.div>

        <div className="services-modern__grid">
          {visibleServices.map((service, index) => (
            <motion.div
              className="services-modern__card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="details-link">
                Подробнее ↗
              </a>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="services-cta">
            <button
              className="services-button"
              onClick={() => setShowAll(true)}
            >
              Показать все услуги
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
