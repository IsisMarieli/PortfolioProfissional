import styels from './Gif.module.css';

export function Gif() {
    return(
        <div className={styels.container}>
            <img className={styels.gif} src="./src/imgs/Pokemon Mew GIF by GIPHY Gaming.gif" alt="gif mew" />
        </div>
    );
}