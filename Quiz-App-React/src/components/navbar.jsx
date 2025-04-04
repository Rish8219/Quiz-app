import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='select-none bg-gray-800 shadow-md'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <Link to="/" className='text-2xl font-bold text-white cursor-pointer'>Quiz App</Link>
                <nav className='flex space-x-4'>
                    <Link to="/" className='text-white hover:scale-130 transition-all duration-130  text-xl hover:text-blue-400'>Home</Link>
                    <Link to="/quiz" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Quiz</Link>
                    <Link to="/profile" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Profile</Link>
                    <Link to="/signup" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Signup</Link>
                    <Link to="/login" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Login</Link>


                </nav>

            </div>
        </div>
    );
}

export default Navbar;
