import styles from "../pages/Home/Home.module.css";
import myImg from '../assets/Foto-Isis.jpg'

export default function AboutSection() {
  return (
    <section id="About" className={styles.containerAbout}>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor dui, dapibus gravida elit.
          Duis sed nisi sed augue convallis suscipit in sed felis. Aliquam sit amet venenatis massa.
        </p>
      </div>

      <img className={styles.myImage} src={myImg} alt="Foto de Isis Marieli" />
    </section>
  )
}
