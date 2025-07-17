import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../pages/Home/Home.module.css";
import VisseVei from "../assets/Visse-Vei.svg";
import OKRBB from "../assets/OKR.BB.svg";
import TeArt from "../assets/TeArt.svg";
import CadastroUsuarios from "../assets/CadastroUsuarios.svg";
import AstroTask from "../assets/AstroTask.svg";
import Pluraliza from "../assets/Pluraliza.svg";
import CheckLab from "../assets/CheckLab.svg";

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Projects" className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>

      <div className={styles.projectsCards}>
        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h3>Visse,Véi?</h3>
          <a
            href="https://www.linkedin.com/posts/isis-marieli-9a350225b_kickoff2024-cultura-economia-activity-7269537006995591168-Jllp?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.Imgs} src={VisseVei} alt="Visse, Véi?" />
          </a>
          <p>É um projeto de um aplicativo que combate a invisibilidade cultural do interior de Pernambuco...</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>Residência Tecnológica</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <h3>OKR.BB</h3>
          <a href="https://plataforma-okr-bb.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={OKRBB} alt="OKR.BB" />
          </a>
          <p>Transformando a gestão de OKRs e KPIs da diretoria do Banco do Brasil com dashboards e automações...</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>FullStack</button>
            <button className={styles.typeProject}>Residência Tecnológica</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h3>TeArt</h3>
          <a href="https://www.figma.com/proto/GdqZuXBeLfUxsAWUF13DGd/TeArt?page-id=0%3A1" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={TeArt} alt="TeArt" />
          </a>
          <p>Centralizando todas as etapas de gestão de eventos culturais em uma plataforma acessível e intuitiva.</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>Projeto Acadêmico</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <h3>Gestão de Usuários</h3>
          <a href="https://github.com/IsisMarieli/Isis-Marieli-Desafio-Tecnico" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={CadastroUsuarios} alt="Cadastro de Usuários" />
          </a>
          <p>Desenvolvimento front e back com boas práticas e API REST para cadastro e edição de usuários.</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>Desafio Técnico</button>
            <button className={styles.typeProject}>FullStack</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <h3>AstroTask</h3>
          <a href="https://www.figma.com/proto/UEXtlfNlmqNyyqcpd46ZUG/AstroTask?page-id=0%3A1" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={AstroTask} alt="AstroTask" />
          </a>
          <p>Listas de tarefas inteligentes com temas personalizados e foco em produtividade leve e prática.</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>Projeto Acadêmico</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0"
        >
          <h3>Pluraliza</h3>
          <a href="https://www.figma.com/proto/pbUqFKIrxz63mW4Lmil8nA/Plurariza-Academy?page-id=0%3A1" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={Pluraliza} alt="Pluraliza" />
          </a>
          <p>Plataforma de impacto social que une educação, saúde, tecnologia e cuidado à comunidade LGBTQIAPN+.</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>Projeto Pessoal</button>
          </div>
        </div>

        <div
          className={styles.projectCard}
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0"
        >
          <h3>CheckLab</h3>
          <a href="https://isismarieli.github.io/Checklab-Project/" target="_blank" rel="noopener noreferrer">
            <img className={styles.Imgs} src={CheckLab} alt="CheckLab" />
          </a>
          <p>Plataforma de Presença do Embarque Digital,
            Fiz um projeto de modernização da interface do CheckLab, plataforma usada pelos alunos do Embarque Digital para acompanhar seus check-ins no laboratório de inovação.</p>
          <div className={styles.typeProjectWrapper}>
            <button className={styles.typeProject}>UX/UI Design</button>
            <button className={styles.typeProject}>FrontEnd</button>
          </div>
        </div>
      </div>
    </section>
  );
}
