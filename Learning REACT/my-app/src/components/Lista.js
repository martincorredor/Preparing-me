import { Fragment, useState } from 'react';
import React from 'react';


const Lista = () => {
    const [arrayNumber, setNumber] = useState([1, 2, 3, 4, 5]);

    const [digit, setDigit] = useState(6);

    const agregarElemento = () => {
        setDigit(digit +1);
        setNumber([...arrayNumber, digit]);
    }

    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumber.map((item, index) =>
                    <p key={index}>{item} - {index} </p>
                )
            }
        </Fragment>
    );
}

export default Lista;