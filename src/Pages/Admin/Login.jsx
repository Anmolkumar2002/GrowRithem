import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) navigate('/admin');
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[400px] sm:w-1/2 lg:w-1/3 mt-10 shadow-2xl rounded-xl shadow-blue-500'>
        <div className='w-full flex flex-col'>
          <div className='flex justify-center my-4'>
            <h1 className='text-4xl'>Admin Login</h1>
          </div>
          <div className='border-b-2 m-4'></div>
          <div className='m-4'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-6 justify-center items-center'>
              <input className='w-full border-2 p-2 rounded-xl border-gray-300' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}required/>
              <input className='w-full border-2 p-2 rounded-xl border-gray-300' type="password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}required/>
              <button className='w-1/4 border-2 p-2 rounded-3xl items-center text-white bg-blue-500 hover:bg-blue-400' type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h1>🔐 Admin Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}required/><br /><br />
    //     <input type="password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}required/><br /><br />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}

export default Login;
