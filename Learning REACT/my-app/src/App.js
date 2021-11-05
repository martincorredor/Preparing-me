import React from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Form from './components/Formulario';
import Saludo from './components/saludo';

function App() {
  return (
    <div className="container mt-5">
      {/* 
      <h1>Hola mundo con REACT</h1>
      < Contador />
      <Lista/>
      <Form/>
      */}
      <Saludo persona="Madresita"/>
    </div>
  );
}

export default App;
