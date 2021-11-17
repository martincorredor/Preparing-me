import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value=""
        ref={register({
          required: { value: true, message: 'required field' },
        })}
      />
      <div>{errors?.name?.message}</div>

      <label>Username</label>
      <input
        type="text"
        name="username"
        value=""
        ref={register({
          required: { value: true, message: 'required field' },
        })}
      />
      <div>{errors?.username?.message}</div>

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
