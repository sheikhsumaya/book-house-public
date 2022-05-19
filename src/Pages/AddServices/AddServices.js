import React from 'react';
import './AddServices.css';
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='add-top mb-5 w-50 mx-auto'>
      <h1 >Please Add a service</h1>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Type Name Here' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-3'  placeholder='Description' {...register("description")} />
      <input className='mb-3' placeholder='Amount' type="number" {...register("price")} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-4' type="Add Info" />
    </form>
    </div>
  );
};

export default AddServices;