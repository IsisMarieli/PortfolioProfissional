import { Gif } from './components/gif';
import { Inicio } from './components/Inicio';
import { Sobre } from './components/Sobre';
import './Global.css';

export function App() {

  return (
    <div>
      <Inicio/>
      <Gif/>
      <Sobre/>
    </div>
  )
}

