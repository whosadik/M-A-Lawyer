import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import team1 from "../assets/petrov.jpg";
import team2 from "../assets/orlova.jpg";
import team3 from "../assets/sydorov.jpg";
import team4 from "../assets/litvin.jpg";
import team5 from "../assets/yakov.jpg";

const team = [
  {
    name: "Александр Петров",
    position: "Юрист по корпоративному праву",
    img: team1,
    phone: "+77001234567",
    whatsapp: "77001234567",
  },
  {
    name: "Мария Орлова",
    position: "Специалист по сделкам и договорам",
    img: team2,
    phone: "+77007654321",
    whatsapp: "77007654321",
  },
  {
    name: "Игорь Сидоров",
    position: "Адвокат по арбитражным делам",
    img: team3,
    phone: "+77005556677",
    whatsapp: "77005556677",
  },
  {
    name: "Екатерина Литвинова",
    position: "Юрист по семейному праву",
    img: team4,
    phone: "+77009887766",
    whatsapp: "77009887766",
  },
  {
    name: "Антон Яковлев",
    position: "Налоговый и финансовый консультант",
    img: team5,
    phone: "+77001112233",
    whatsapp: "77001112233",
  },
];

export default function TeamSection() {
  return (
    <section className="team-block">
      <div className="team-block__container">
        <motion.h2
          className="team-block__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Наша команда
        </motion.h2>

        <div className="team-block__grid">
          {team.map((person, idx) => (
            <motion.div
              className="team-block__person"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="team-block__photo">
                <img src={person.img} alt={person.name} />
              </div>
              <p className="team-block__name">{person.name}</p>
              <p className="team-block__position">{person.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
