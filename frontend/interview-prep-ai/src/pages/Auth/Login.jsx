import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import Input from '../../components/Inputs/input';

const Login = ({setCurrentPage}) => {
  const [Email, setEmail] =useState("");
  const [Password, setPassword] =useState("");
  const [Error, setError] =useState(null);

  const navigate = useNavigate();

  const handleLogin = async(e) =>{
    e.preventDefault();
  };
  return (
    <div className=' mb:w-[33vw] p-7 flex flex-col justify-center '>
      <h3 className='text-lg font-semibold text-black'>welcome back</h3>
      <p className='text-cs text-slate-700 mt-[5px] mb-4'>Please enter your details to login!</p>
       
       <form onSubmit={handleLogin}>
<Input type="text"  value={Email} onChange={({ target })=>setEmail(target.value)}
 label="email address" placeholder='attiqrehman130@gmail.com'/>
 <Input type="password"  value={Password} onChange={({ target })=>setPassword(target.value)}
 label="Password" placeholder='Enter your password'/>
 {Error && <p className='text-red-500 text-xs pb-2.5'>{Error}</p>}
 <button type='submit' className='btn-primary'>
LOGIN

 </button>
 <p className='text-[13px] text-slate-800 mt-3'>Don't have account?{" "}
  <button className='font-medium text-primary underline cursor-pointer' onClick={()=>{
    setCurrentPage("Signup")
  }}>
Signup
  </button >
 </p>
       </form>
    </div>
  )
}

export default Login