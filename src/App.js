import './App.css';
import Button from './components/Boton.jsx';
import Contador from './components/Contador.js'
import gamboLogo from './images/GAMBO1.png';
import clickCounter from './images/clickcounter.png'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    // console.log("Clic")
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    // console.log("Reiniciar")
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img
          className='logo'
          src={gamboLogo}
          alt='Logo de Gamboa'
        />
      </div>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={clickCounter}
          alt='Logo de Click counter'
        />
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
