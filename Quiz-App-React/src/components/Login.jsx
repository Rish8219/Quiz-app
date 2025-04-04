import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    useEffect(() => {
        console.log("userData is", data);
    }, [data])

    const handleClick = (e) => {
        e.preventDefault();
        if (email && password) {
            setData({
                email,
                password
            });
            toast.success("Login successful!", {
                position: "top-center",
                autoClose: 2000,
                theme: "light",
            });
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
            <div className=" glasseffect rounded-xl p-10 shadow-lg">
                <form>
                    <h1 className="text-4xl text-center italic mb-6">Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className="inputcolor border mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                    <label htmlFor="password" className="mt-4 block">Password</label>
                    <div className="relative">
                        <input ref={passwordInputRef} type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="border bg-none mt-2 p-2 w-full focus:ring-2 text-xl focus:ring-blue-400 rounded-xl outline-none" />
                        {password.length > 0 ? <button style={{ display: "inline" }} className="absolute right-3 top-4 text-white hover:text-blue-500" onClick={(e) => handleShowPassword(e)}>{showPassword ? "hide" : "show"}</button> : ""}
                    </div>
                    <button type="submit" onClick={(e) => handleClick(e)} className="border-none outline-none px-10 py-3 text-xl mt-6 bg-green-400 rounded-xl hover:bg-green-600 cursor-pointer w-full"> Login </button>
                    <p className="text-center mt-3"> Don't have an account?{" "}<span onClick={() => navigate("/signup")} className="text-blue-500 cursor-pointer hover:text-blue-600">SignUp</span></p>
                </form>

            </div>
            <ToastContainer />

        </div>

    );
};

export default Login;