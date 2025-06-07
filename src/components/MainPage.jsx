import "./MainPage.css";
import BgImg from "../assets/bg.png";

export default function MainPage() {
  const handleScrollToContacts = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-page" id="home">
      <div className="main-page__bg">
        <img src={BgImg} alt="Background" />
        <div className="main-page__overlay" />
      </div>

      <div className="main-page__content">
        <h1 className="main-page__title">Гарантия решения вашего запроса</h1>
        <p className="main-page__subtitle">
          Предоставляем бесплатную экспертную консультацию
        </p>
        <button className="main-page__cta" onClick={handleScrollToContacts}>
          Получить консультацию
        </button>
      </div>

      <div className="main-page__background-text">M&A LAWYER</div>
      <div className="main-page__stats">
        <div>
          <span className="stat-number">9557</span>
          <span className="stat-label">выигранных дел</span>
        </div>
        <div>
          <span className="stat-number">10+</span>
          <span className="stat-label"> лет юридической практики</span>
        </div>
        <div>
          <span className="stat-number">30</span>
          <span className="stat-label">минут консультации</span>
        </div>
        <div>
          <span className="stat-number">92%</span>
          <span className="stat-label">более побед</span>
        </div>
      </div>
    </div>
  );
}
