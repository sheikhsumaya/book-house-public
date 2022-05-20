import React from 'react';
// import './AddServices.css';
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
    console.log(data)
    const url = `https://serene-coast-92793.herokuapp.com/data`;
    fetch(url,{
       method: 'POST',
       headers:{
         'content-type' : 'application/json'
       },
       body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result => {
      console.log(result);
    })
  };
  return (
    <div className='add-top mb-5 w-50 mx-auto'>
      <h1 >Please Add a service</h1>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Type Name Here' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-3' placeholder='Type Supplier Name Here' {...register("suppliername", { required: true, maxLength: 20 })} />
      <textarea className='mb-3'  placeholder='Description' {...register("des")} />
      <input className='mb-3' placeholder='Amount' type="number" {...register("price")} />
      <input className='mb-3' placeholder='Quantity' type="number" {...register("quentity")} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-4' type="submit" value="Add Here" />
    </form>
    </div>
  );
};

export default AddServices;