import React from 'react';
import { Fragment, useState } from 'react';

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
