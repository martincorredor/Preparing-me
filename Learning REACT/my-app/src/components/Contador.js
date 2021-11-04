import React, {useState, Fragment} from 'react';

const Contador= () => {
    const [number, setNumber] = useState(0);

    const aumentar = () => {
        setNumber(number +1);
    }

    const disminuir = () => {
        setNumber(number -1);
    }

    return (
        <Fragment>
            <h3>Mi primer componente {number}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>       
        </Fragment>
        
    );
}

export default Contador;