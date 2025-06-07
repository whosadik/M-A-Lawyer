import React from "react";
import "./Contacts.css";
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <div className="contact-section__info">
          <h2>
            <span className="gold">КОНТАКТНАЯ</span>
            <br /> ИНФОРМАЦИЯ
          </h2>

          <ul className="contact-list">
            <li>
              <FaPhoneAlt /> +7(700) 716 1879
            </li>
            <li>
              <FaTelegramPlane /> @malawyer
            </li>
            <li>
              <FaMapMarkerAlt /> г. Астана
            </li>
            <li>
              <FaMapMarkerAlt /> M&A
            </li>
            <li>
              <FaInstagram /> malawyer.kz
            </li>
            <li>
              <FaEnvelope /> malawyer@gmail.com
            </li>
          </ul>

          <div className="consult-box">
            <p>НУЖНА КОНСУЛЬТАЦИЯ?</p>
            <div className="phone-form">
              <input type="tel" placeholder="+7 (999) 999-99-99" />
              <button>Заказать звонок</button>
            </div>
          </div>
        </div>

        <div className="contact-section__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=71.430564%2C51.128207&z=12&l=map"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            title="Астана карта"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
