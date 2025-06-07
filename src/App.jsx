import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Main from "./components/MainPage";
import AboutCompany from "./components/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import ExpandableServices from "./components/Services";
import ConsultationSteps from "./components/FreeConsultation";
import TeamSection from "./components/Testimonials";
import CaseCarousel from "./components/Cases";
import ContactSection from "./components/Contacts";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <AboutCompany />
      <ConsultationSteps></ConsultationSteps>
      <ExpandableServices />
      <CaseCarousel />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
