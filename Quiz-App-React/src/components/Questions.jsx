import React from 'react';

const Questions = ({ question, answers, data, handleClick, selectedAnswer, score, dataBox, quizFinished }) => {
    console.log(dataBox.length - 1);
    console.log(data);
    let alphabet = ["A", "B", "C", "D"]


    return (

        <div >

            <div>
                <h2 className='text-4xl text-wrap '>  Q.{data + 1} {question}</h2>
                <ul>
                    {
                        answers.map((answer, index) => {
                            return (
                                <li className='cursor-pointer mt-7 text-2xl bg-white text-blue-400 rounded-2xl p-3 hover:bg-blue-400 hover:text-black ' id={selectedAnswer == answer ? "tenable" : ""} onClick={(e) => handleClick(e, answer)}  key={index}>{alphabet[index]}. {answer}</li>
                            )
                        })
                    }
                </ul>
            </div>


        </div>
    );
}

export default Questions;
