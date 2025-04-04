import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full select-none h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
     
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold">Test Your Knowledge!</h1>
        <p className="mt-4 text-lg">Play fun & challenging quizzes to sharpen your mind.</p>
        <button onClick={()=>navigate("/quiz")} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md text-lg cursor-pointer font-semibold hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 cursor-pointer">
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">📚 Multiple Topics</h3>
          <p className="mt-2">Science, History, Tech & More!</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">🏆 Leaderboard</h3>
          <p className="mt-2">Compete & top the charts!</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">⏳ Timed Challenges</h3>
          <p className="mt-2">Test speed & accuracy!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;