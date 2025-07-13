import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection.jsx";
import PreviewSection from "../../components/PreviewSection";
import ProjectsSection from "../../components/ProjectsSection";
import Softs from "../../components/Softs";
import styles from "./Home.module.css";
import Mew from "../../assets/PokemonMew.gif";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header />
      <PreviewSection />
      <div data-aos="zoom-out">
      <img className={styles.Gif} src={Mew} alt="gif pokemon mew" />
      </div>
      <AboutSection />
      <Softs />
      <ProjectsSection />
      <Footer />
    </div>

  )
}