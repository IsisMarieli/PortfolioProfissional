import { useState } from 'react';
import styles from '../Header/Header.module.css';
import { FaBars } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.containerHeader}>
            <h1 className={styles.title}>My Portfolio</h1>

            <button className={styles.menuIcon} onClick={toggleMenu}>
                <FaBars />
            </button>

            <nav className={`${styles.nav} ${isOpen ? styles.showNav : ''}`}>
                <a href='#Home' className={styles.navLink}>Home</a>
                <a href='#About' className={styles.navLink}>About</a>
                <a href='#Skills' className={styles.navLink}>Skills</a>
                <a href='#Projects' className={styles.navLink}>Projects</a>
                <a
                    href="https://api.whatsapp.com/send?phone=5581986692567&text=Oi%20Isis%2C%20vim%20pelo%20seu%20Portf%C3%B3lio%20tudo%20bem%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnMessage}
                >
                    Message
                </a>
            </nav>

        </header>
    );
}
