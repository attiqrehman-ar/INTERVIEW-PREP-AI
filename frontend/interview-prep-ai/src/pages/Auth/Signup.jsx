import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/input';

const Signup = ({setCurrentPage}) => {
  const [profilePic ,setProfilePic]= useState(null);
  const [fullName, setFullName] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const [error, setError] =useState(null);

const navigate =useNavigate();

const handleSignup = async(e)=>{
  e.preventDefault();
};
  return (
    <div className=' mb:w-[33vw] p-7 flex flex-col justify-center '>
    <h3 className='text-lg font-semibold text-black'>Create an Account!</h3>
    <p className='text-cs text-slate-700 mt-[5px] mb-4'>Join us today by entering your details below.</p>
     
     <form onSubmit={handleLogin}>
<Input type="text"  value={email} onChange={({ target })=>setEmail(target.value)}
label="email address" placeholder='attiqrehman130@gmail.com'/>
<Input type="text"  value={fullName} onChange={({ target })=>setFullName(target.value)}
label="email address" placeholder='attiqrehman130@gmail.com'/>
<Input type="password"  value={password} onChange={({ target })=>setPassword(target.value)}
label="Password" placeholder='Enter your password'/>
{error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
<button type='submit' className='btn-primary'>
SIGNUP

</button>
<p className='text-[13px] text-slate-800 mt-3'>Already an account?{" "}
<button className='font-medium text-primary underline cursor-pointer' onClick={()=>{
  setCurrentPage("Login")
}}>
Login
</button >
</p>
     </form>
  </div>
  )
}

export default Signup