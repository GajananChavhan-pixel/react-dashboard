import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import React from 'react';
import axios from 'axios';

function Login() 
{
  const {register, handleSubmit}=useForm();
 const navigate= useNavigate();

 function onLogin(data)
 {
  alert("Logged in..!");
  console.log(data);

  axios.get(`http://localhost:9292/userLogin/${data.username}/${data.password}`)
  .then((res)=>{
  console.log(res.data);
  localStorage.setItem("user", JSON.stringify(res.data));
  navigate('/dashboard');
  })
  .catch((error)=>console.log(error))
 }


  return (
    <div>
      <h1>Login</h1> 
      <form onSubmit={handleSubmit(onLogin)}>
      Username:- <input type='text'{...register('username')}/> <br></br>
      Password:- <input type='password'{...register('password')}/> <br></br>

      <button type='submit'>Login</button> <br></br>
      </form>
    </div>
  )
}
export default Login
