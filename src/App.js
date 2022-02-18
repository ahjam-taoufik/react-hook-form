
import './App.css';
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('ok',data);

 
  return (
   <div className='App'>

    <form onSubmit={handleSubmit(onSubmit)}> <br/><br/>
    

      <input  {...register("name", { required: true })} /> <br/><br/>
      {errors.name && <span>This field is required</span>}<br/>
     

      <input {...register("age", { required: true ,min:20,valueAsNumber:true })} /><br/><br/>
      {errors.age && <span>This field is required or wrong</span>}<br/>
      

      <input type="submit" />
    </form>
   </div>
  );
}