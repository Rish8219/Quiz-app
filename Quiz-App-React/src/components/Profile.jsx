import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setData] = useState([{
        name: "",
        email: "",
        password: "",
    }]);
    const [loggedData, setloggedData] = useState([{
        name: "",
        email: "",
        password: "",
    }]);
    const navigate = useNavigate();
    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem("userData"));
        setData(Data);

        const logindData = JSON.parse(localStorage.getItem("user"));
        setloggedData(logindData);

        // check if data matches email and password
        if (!Data) {
            alert("Please login first");
            navigate("/login");
        }
    }, []);
    console.log("userData", userData);
    console.log("logged data is", loggedData);


    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/login");

    }
    function handleEdit(id) {
        navigate(`/profile/edit/${id}`);

    }
    return (
        <div className="w-full h-166.5 bg-gradient-to-r from-blue-500 to-purple-500">
            <h1 className="text-4xl text-white text-center italic mb-6">Profile</h1>
            <div className="flex justify-center">
                <div className="glasseffect text-white rounded-lg shadow-md w-96 p-8">
                    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                    {loggedData.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className="text-white">Name: {item.name}</p>
                                <p className="text-white">Email: {item.email}</p>
                                <p className="">High-Score</p>
                                <button className="bg-green-500 text-white px-4 py-2 mt-3 rounded cursor-pointer hover:bg-green-600" onClick={() => handleEdit(item.email)}>Edit Profile</button>
                                 <button className="bg-red-500 text-white px-4 mt-3 py-2 rounded cursor-pointer hover:bg-red-700 ml-4" onClick={handleLogout}>Logout</button>
                            </div>
                        )
                    })

                    }


                    {/* <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">Take Quiz</button> */}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate("/quiz")}>Take Quiz</button>
            </div>
            <Outlet />
        </div>

    );
}

export default Profile;
