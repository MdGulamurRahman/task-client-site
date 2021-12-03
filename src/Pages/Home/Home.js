import React from 'react';
import './Home.css'
import { useForm } from "react-hook-form";
const Home = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    fetch("https://sheltered-lake-63424.herokuapp.com/user",{
        method: "POST",
         headers: {"content-type":"application/json"},
         body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if(result){
            alert("Successfully Register")
            reset()
       }
        console.log(result)
    })

  };
    return (
        <div className="container-fluid">
            <h1 className="mt-5 mb-3">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="first-field me-2" type="text"{...register("firstName", { required: true, minLength: 2 })} placeholder="FirstName"/>
                <input className="last-field mb-1" type="text"{...register("lastName", { required: true, minLength: 2 })}placeholder="LastName"/> <br />
                <input className="my-1 date-field" type="date" {...register("date")} placeholder="Date" required/> <br />
                <input className="my-1 input-field" {...register("email", )} placeholder="Email" required/> <br />
                <input className="my-1 input-field" type="number" {...register("number", {minLength: 10} )} placeholder="Number"/> <br />
                <input className="input-field my-1" type="text" {...register("address")} placeholder="Address" required/> <br />
                <input className="input-btn" type="submit" />
            </form>
        </div>
    );
};

export default Home;