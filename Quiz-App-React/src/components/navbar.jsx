import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [data,setData]=useState("")
    useEffect(()=>{
        let gotData=JSON.parse(localStorage.getItem("user"))
       
        setData(gotData)
       
    },[])
    // console.log(data);
    return (
        <div className='select-none bg-gray-800 shadow-md'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <NavLink to="/" className='text-2xl font-bold text-white cursor-pointer'>Quiz App</NavLink>
                <nav className='flex space-x-4'>
                    <NavLink to="/" className='text-white hover:scale-130 transition-all duration-130  text-xl hover:text-blue-400'>Home</NavLink>
                    {/* <NavLink to="/quiz" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Quiz</NavLink> */}
                    <NavLink to="/profile" className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Profile</NavLink>
                        <NavLink to="/signup" style={{display:data?"none":"inline"}} className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Signup</NavLink> 
                         <NavLink to="/login" style={{display:data?"none":"inline"}} className='text-white text-xl hover:scale-130 transition-all duration-130 hover:text-blue-400'>Login</NavLink>
                    



                </nav>

            </div>
        </div>
    );
}

export default Navbar;
