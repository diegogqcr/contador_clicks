import React from "react";
import '../style/Boton.css'

//recibimos el texto como props -> props.texto
// ahora en vez de recibir todo el objeto vamos a desestructurizar { texto }
// y solo declaramos la propiedad que deseamos recibir  por su nombre 

//y agregamos otro prop que esBotonDeClic -> nos sirve para hacer la comparacion de que tipo de boton es
function Boton({ texto, esBotonDeClic, manejarClic }) {

  return (
    //1. asignamos clases condicionadas con un operador ternario(JS) al boton { } para decidir que tipo es!
    //2. event listener onClick que hace cuando hay un evento en este caso al hacer click en un boton
    //3. recibir una funcion como props
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}
    >
      {texto}
    </button>
  )

}

export default Boton; //recuerda que con la exportacion por defecto solo se puede exportar un solo elemento del archivo
//recibimos una funcion como props manejarClic en el evento onClick y se llama cuando ocurre este evento en el boton 
//mostramos segun sea el tipo del boton se muestra el estilo boton-clic o el estilo reiniciar segun si className


// explicacion detallada
//importamos react
//definimos la clase function Boton ()
//recibimos 3 porps en un objeto js ( { texto, esBotonDeClic, manejarClic } )
//    1. el texto que se va a mostar {texto}
//    2. si el boton es un boton de tipo clase 'boton-clic' : 'boton-reiniciar'
//    3.  recibimos una funcion que nos permite manejar que ocurre cuando se haga click sobre el boton
//    4. lo asignamos al event listener  onClick={manejarClic}

// onClick={manejarClic} ---> viene del componente que renderise el boton, xq cuando se haga click en el vamos a tener que actualizar el estado de otro componente que es el 
//CONTADOR  hacemos click al boton y se actualiza el numero de click. y el contador esta en otro componente


// para importar el boton en otro componente
//recuerde agregar los props que declaro aqui ( { texto, esBotonDeClic, manejarClic } )
// incorpore los en la estructura del componente <Button />
// manejarClic de  declara y se ejecuta en el componente padre o donde se ejecuta
        // <Button 
        //   texto='Clic'
        //   esBotonDeClic={true}
        //   manejarClic={}
        // />  

// se declara en el componente como una funcion de tipo flecha
// const manejarClic = () => {
// }

