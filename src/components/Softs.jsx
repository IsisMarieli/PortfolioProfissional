import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../pages/Home/Home.module.css";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <section id='Skills' className={styles.skillsContainer}>
            <div className={styles.titleSkills}>
                <h1>Skills</h1>
            </div>

            <div
                data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0"
                className={styles.skills}>
                <div className={styles.hards}>
                    <h2>Hard Skills</h2>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>React, Node.js</li>
                        <li>Python</li>
                        <li>Git, GitHub</li>
                        <li>Figma</li>
                        <li>Expres</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className={styles.softs}>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Colaboração</li>
                        <li>Trabalho em equipe</li>
                        <li>Resolução de problemas</li>
                        <li>Aprendizado contínuo</li>
                        <li>Organização</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}