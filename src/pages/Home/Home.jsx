import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection.jsx";
import PreviewSection from "../../components/PreviewSection";
import ProjectsSection from "../../components/ProjectsSection";
import Softs from "../../components/Softs";
import styles from "./Home.module.css";
import Mew from "../../assets/PokemonMew.gif";


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <PreviewSection />
      <img className={styles.Gif} src={Mew} alt="gif pokemon mew" />
      <AboutSection />
      <Softs/>
      <ProjectsSection />
      <Footer/>
    </div>

  )
}