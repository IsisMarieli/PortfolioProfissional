import styles from '../Footer/Footer.module.css';


export default function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <p className={styles.text}>copyright &copy; 2025<a href="https://github.com/IsisMarieli" target="_blank" rel="noopener noreferrer"> Isis Marieli.</a></p>
        </footer>
    )
}