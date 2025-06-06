import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Inicio.module.css';
import { Header } from './Header';

export function Inicio() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.blur}></div>

            <main id="Inicio" className={styles.content}> {/* ID corrigido */}
                <h1 className={styles.title}>UX/UI DESIGNER <br/><strong>DEVELOPER</strong></h1>
                <p className={styles.description}>
                    Tecnologia é melhor quando une pessoas e resolve problemas.
                </p>
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
                <img className={styles.prototipos} src="./src/imgs/prototipos.png" alt="prototios" />
            </main>
        </div>
    );
}