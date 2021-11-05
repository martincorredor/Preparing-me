import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormCrud = () => {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setentradas] = useState([]);

  const procesarFormulario = (data, e) => {
    console.log(data);
    setentradas([...entradas, data]);
    // limpiar campos
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit(procesarFormulario)}>
        <input
          name="titulo"
          ref={register({
            required: { value: true, message: 'Ingrese un nombre' },
          })}
          className="form-control my-2"
          placeholder="Ingrese título"
        ></input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.titulo?.message}
        </span>
        <input
          name="descripcion"
          ref={register({
            required: { value: true, message: 'Ingrese descripción' },
          })}
          className="form-control my-2"
          placeholder="Ingrese descripción"
        ></input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.descripcion?.message}
        </span>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
      <ul className="mt-2">
        {entradas.map((item, index) => (
          <li key={index}>
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default FormCrud;

/*
const Form = () => {
  const [data, setdata] = useState({
    firstName: '',
    name: '',
  });

  const handleInputChance = (event) => {
    setdata({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.firstName + ' ' + data.name)
  }


  return (
    <Fragment>
      <h1>Form</h1>
      <form className="row" onSubmit={sendData}>
        <div className="col-md-3">
          <input
            placeholder="Enter your first-name"
            className="form-control"
            type="text"
            name="firstName"
            onChange={handleInputChance}
            
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Enter your name"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChance}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
*/
