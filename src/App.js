
import './App.css';
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log('ok',data);

  console.log(watch(["Lname","Fname"])); // watch input value by passing the name of it

  return (
   <div className='App'>

    <form onSubmit={handleSubmit(onSubmit)}> <br/><br/>
    
      <input  {...register("Fname", { required: true })} /> <br/><br/>
      {errors.Fname && <span>This field is required</span>}<br/>
     
      <input {...register("Lname", { required: true })} /><br/><br/>
    
      {errors.Lname && <span>This field is required</span>}<br/>
      
      <input type="submit" />
    </form>
   </div>
  );
}