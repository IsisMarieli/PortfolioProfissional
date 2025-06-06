import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.logo}>Meu Portfólio</h1>
                <nav className={styles.nav}>
                    <a href='#Inicio' className={styles.navLink}>Início</a>
                    <a href='#Sobre' className={styles.navLink}>Sobre Mim</a>
                    <a href='#' className={styles.navLink}>Projetos</a>
                </nav>
                <button className={styles.btnContatos}>Mensagem</button>
            </div>
        </div>
    )
}