'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../services/auth';
import { useAuth } from '../components/ContextApi';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const {isAuthenticated, setIsAuthenticated} = useAuth();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      setIsAuthenticated(true);
      router.push('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.'); // Handle login error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      {error && <div className="text-red-500">{error}</div>}
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
