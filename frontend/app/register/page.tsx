// pages/register.tsx
'use client'
import { useState } from 'react';
import { registerUser } from '../services/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await registerUser({ username, password });
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Register</h1>
      {error && <div className="text-red-500">{error}</div>} {/* Show error message */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Username" 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          className="p-2 border border-gray-300 rounded-md w-full" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="p-2 border border-gray-300 rounded-md w-full" 
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
