import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    useEffect(() => {
        console.log("userData is", data);
    }, [data])

    const handleClick = (e) => {
        e.preventDefault();
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                setData({
                    name,
                    email,
                    password
                });
                //set localStorage as an array of objects
                const existingData = JSON.parse(localStorage.getItem("userData")) || [];
                const newUser = {
                    name: name,
                    email: email,
                    password: password,
                };
                // Check if the user already exists
                const userExists = existingData.some(user => user.email === email);
                console.log(userExists);
                // If user already exists, show error message
                if (userExists) {
                    toast.error("User already exists", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                    return;
                }
                // If user doesn't exist, add the new user to the array

                existingData.push(newUser);

                // localStorage.setItem("userData", JSON.stringify(data));

                localStorage.setItem("userData", JSON.stringify(existingData));

                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                toast.success("Signup successful!", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "light",
                });
                navigate("/login")
            }
            else {
                toast.error("Password and Confirm Password do not match", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "light",
                });
            }

        } else {
            toast.error("Please fill all the fields", {
                position: "top-center",
                autoClose: 2000,
                theme: "light",
            });
        }
    };
    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);

    }

    return (
        <div className="w-full h-screen flex justify-center items-center  bg-gradient-to-r from-blue-500 to-purple-500">
            <div className=" glasseffect rounded-xl p-5 ">
                <form>
                    <h1 className="text-4xl text-center italic mb-6">Signup</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name..." className="border mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." className="border  mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                    <div className='relative'>
                        <label htmlFor="password" className="mt-4 block">Password</label>
                        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." className="border mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                        {password.length > 0 ? <button style={{ display: "inline" }} className="absolute right-3 top-10 text-white hover:text-blue-400" onClick={(e) => handleShowPassword(e)}>{showPassword ? "hide" : "show"}</button> : ""}
                    </div>
                    <label htmlFor="confirmPassword" className="mt-4 block">Confirm Password</label>
                    <input type={showPassword ? "text" : "password"} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password..." className="border mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                    <button type="submit" onClick={handleClick} className="border-none outline-none px-10 py-3 text-xl mt-6 bg-blue-400 rounded-xl cursor-pointer w-full">Signup </button>
                    <p className="text-center mt-3"> Already have an account?{" "}<span onClick={() => navigate("/login")} className=" text-green-500 cursor-pointer hover:text-green-700">Sign-In </span></p>
                </form>

            </div>
            <ToastContainer />

        </div>
    );
}

export default Signup;
