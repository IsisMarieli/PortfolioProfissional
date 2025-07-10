import styles from "../pages/Home/Home.module.css";
import myImg from '../assets/Foto-Isis.jpg';

export default function AboutSection() {
  return (
    <section id="About" className={styles.containerAbout}>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p>
          Olá! Me chamo <strong>Isis Marieli</strong>, sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> no período da noite, atualmente pelo programa <strong>Embarque Digital</strong>. Meu principal objetivo é adquirir <strong>experiência prática</strong> que complemente minha formação acadêmica e contribua para a construção de uma carreira sólida e de sucesso na área de <strong>TI</strong>.
          <br /><br />
          Além da tecnologia, tenho como hobbies o <strong>futebol</strong>, os <strong>jogos eletrônicos</strong> e um grande interesse pela <strong>cultura latino-americana</strong>, especialmente a música e o idioma espanhol,
          e meu Pokémon favorito é o <strong>Mew</strong>. Gosto dele por ser um pokémon raro, misterioso e poderoso, mas ao mesmo tempo leve, divertido e cheio de personalidade, são qualidades que me inspiram.
        </p>

      </div>

      <img className={styles.myImage} src={myImg} alt="Foto de Isis Marieli" />
    </section>
  );
}
