import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/input';
import ProfilePhoteSelector from '../../components/Inputs/ProfilePhoteSelector';

const Signup = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // TODO: Add signup logic here
  };

  return (
    <div className=' p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account!</h3>
      <p className='text-sm text-slate-700 mt-1 mb-4'>
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignup}>
        <ProfilePhoteSelector image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
          <Input
            type="text"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="e.g. Attiq Ur Rehman"
          />
          <Input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="attiqrehman130@gmail.com"
          />
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Enter your password"
          />
        </div>

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

        <button type='submit' className='btn-primary mt-4 w-full'>
          SIGN UP
        </button>

        <p className='text-sm text-slate-800 mt-3'>
          Already have an account?{" "}
          <button
            type="button"
            className='font-medium text-primary underline cursor-pointer'
            onClick={() => setCurrentPage("login")} 
           > 
            Login
          </button>
        </p>
      </form>
    </div>
  );
};


export default Signup;
