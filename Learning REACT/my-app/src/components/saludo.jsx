import React from 'react'
import { Fragment } from 'react'
import Comentarios from './Comentarios';

const Saludo = (props) => {
    const sujeto = {
        nombre: "Richard",
        urlImg: "http://via.placeholder.com/64",
        texto: "Un comentario cualquiera"
    }

    return(
        <Fragment>
            <h2>Hola! {props.persona} </h2>
            <Comentarios sujeto={sujeto} />
        </Fragment>
    )
}

export default Saludo;
