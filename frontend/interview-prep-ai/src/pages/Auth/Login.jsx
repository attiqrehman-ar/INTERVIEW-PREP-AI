import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/input';
import { validateEmail, validatePassword } from '../../utils/helper';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [error, setError] =useState(null);

  const navigate = useNavigate();

  const handleLogin = async(e) =>{
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid Email Address!');
      return;
    }
  
    if (!validatePassword(password)) {
      setError('Please enter a correct password!');
      return;
    }
  
    setError("");
  
    try {
      // TODO: Call your login API here
      // Example: await axios.post('/api/login', { email: Email, password: Password });
  
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong! Please try again.");
      }
    }
  };
  return (
    <div className=' p-7 flex flex-col justify-center '>
      <h3 className='text-lg font-semibold text-black'>welcome back</h3>
      <p className='text-cs text-slate-700 mt-[5px] mb-4'>Please enter your details to login!</p>
       
       <form onSubmit={handleLogin}>
<Input type="text"  value={email} onChange={({ target })=>setEmail(target.value)}
 label="email address" placeholder='attiqrehman130@gmail.com'/>
 <Input type="password"  value={password} onChange={({ target })=>setPassword(target.value)}
 label="Password" placeholder='Enter your password'/>
 {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
 <button type='submit' className='btn-primary'>
LOGIN

 </button>
 <p className='text-[13px] text-slate-800 mt-3'>Don't have account?{" "}
  <button className='font-medium text-primary underline cursor-pointer' onClick={()=>{
    setCurrentPage ("signup")
  }} type='button'>
Signup
  </button >
 </p>
       </form>
    </div>
  )
}

export default Login