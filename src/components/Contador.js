import React from "react";
import '../style/Contador.css'
//nuestra funcion devuelve un jsx enviamos entre los parentesis un objeto de js con la propiedad numClics
function Contador({ numClics }) {


  return (
    <div className='contador'>
      {numClics}
    </div>

  )
}

export default Contador;