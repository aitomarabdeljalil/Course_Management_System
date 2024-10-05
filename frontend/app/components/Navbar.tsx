'use client'
import Link from 'next/link';
import { logoutUser } from '../services/auth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './ContextApi';

const Navbar = () => {
  
  let {isAuthenticated, setIsAuthenticated} = useAuth();

  const router = useRouter();
  const handleLogout = () => {
    logoutUser();
    setIsAuthenticated(false);
    router.push('/login');
  };

  console.log("isAuthenticated", isAuthenticated);
  return (
    <nav className="bg-gray-800">
      <div className='container m-auto p-4'>
      {
        isAuthenticated ? (
          <div className='flex items-center justify-between'>
            <ul className="flex space-x-4 items-center ">
              <li><Link href="/" className="text-white">Home</Link></li>    
              <li><Link href="/courses" className="text-white">Courses</Link></li>
            </ul>
            <button onClick={handleLogout} className="block px-3 py-2 leading-loose text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-200">Logout</button>
          </div>
        ):(
          <div className='flex items-center justify-between'>
            <ul className="flex space-x-4 items-center">
              <li><Link href="/" className="text-white">Home</Link></li>    
            </ul>
            <div className='flex space-x-4 items-center'>
              <button  className="block px-3 py-2 leading-loose text-center text-black font-semibold bg-white rounded-xl transition duration-200"><Link href="/login">Login</Link></button>
              <button className="block px-3 py-2 leading-loose text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-200"><Link href="/register">Register</Link></button>
            </div>
          </div>
        )
      }
      </div>
    </nav>
  );
};

export default Navbar;
