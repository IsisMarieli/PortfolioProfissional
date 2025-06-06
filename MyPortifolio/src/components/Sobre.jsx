import styles from './Sobre.module.css';

export function Sobre() {
    return (
        <div id="Sobre" className={styles.sobre}>
            <div className={styles.blur}></div>

            <div className={styles.texto}>
                <h1>Sobre Mim</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor dui, dapibus gravida elit.
                    Duis sed nisi sed augue convallis suscipit in sed felis. Aliquam sit amet venenatis massa.
                </p>
            </div>
            <img className={styles.minhafoto} src='./src/imgs/Foto-Isis.jpg' alt='foto de Isis Marieli' />
        </div>
    );
}