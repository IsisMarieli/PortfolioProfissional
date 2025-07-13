import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../pages/Home/Home.module.css";
import Prototipos from "../assets/prototipos.png";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function PreviewSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='Home' className={styles.previewContainer}> {/* nome novo sem conflito */}
      <div data-aos="fade-right" className={styles.textSection}>
        <h1>UX/UI DESIGNER</h1>
        <h2><span>DEVELOPER FULLSTACK</span></h2>
        <p>Tecnologia é melhor quando une pessoas e resolve problemas.</p>
        <div className={styles.socialButtons}>
          <a href="https://github.com/IsisMarieli" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/isis-marieli-9a350225b/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/isis.mourz/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className={styles.blur}></div>

      <div data-aos="fade-left"
        className={styles.prototipos}>
        <img src={Prototipos} alt="Prototipos" />
      </div>
    </section>

  )
}
