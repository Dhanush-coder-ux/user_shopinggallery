import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { fadein } from '../variants';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setstate] = useState('Login')
  const {token, setToken, navigate, backend_url} = useContext(ShopContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const onSubmite = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting

    try {
      if (state === 'Sign Up') {
        const response = await axios.post(`${backend_url}/Signup`, {
          username: name,
          email,
          password
        });

        if (response.status === 201) {
          toast.success('User Created Successfully!');
        } else {
          toast.error(response.data.message || "Signup failed!");
        }

      } else {
        const response = await axios.post(`${backend_url}/Signin`, { email, password });

        if (response.data.access_token) {
          setToken(response.data.access_token);  
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          toast.success('Login Successful!');
          navigate('/'); 
        } else {
          toast.error(response.data.message || "Login failed!");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if (!token) {
      const storedToken = localStorage.getItem('access_token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, [token]); 

  return (
    <motion.div 
      variants={fadein('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'
    >
      <div className='inline-flex items-center gap-3 mt-10'>
        <p className='text-3xl text-[#83B505]'> {state}</p>
      </div>
      {state === 'Login' ? '' : <input type="text" value={name} className='w-full py-2 px-2 mt-2 border border-[#83B505] outline-0' onChange={(e)=>setName(e.target.value)} placeholder='Name' required/>}
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full py-2 px-2 mt-2 border border-[#83B505] outline-0' placeholder='Email' required/>
      <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password} className='w-full py-2 px-2 mt-2 border border-[#83B505] outline-0' placeholder='Password'  required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password</p>
        {
          state === 'Login' ? <p onClick={()=>setstate('Sign Up')} className='cursor-pointer'>Create Account</p> : <p onClick={()=>setstate('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button 
        onClick={onSubmite} 
        disabled={isLoading} // Disable button when loading
        className={`bg-[#83B505] px-4 py-2 text-white cursor-pointer flex items-center justify-center min-w-[120px] ${
          isLoading ? 'opacity-75' : ''
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          state === 'Login' ? 'Sign in' : 'Sign Up'
        )}
      </button>
    </motion.div>
  )
}

export default Login