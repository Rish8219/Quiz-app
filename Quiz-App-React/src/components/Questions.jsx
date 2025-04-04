import React from 'react';

const Questions = ({ question, answers, data, handleClick, selectedAnswer, score, dataBox, quizFinished }) => {
    console.log(dataBox.length - 1);
    console.log(data);
    let alphabet = ["A", "B", "C", "D"]


    return (

        <div >

<<<<<<< HEAD
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

=======

                    <div>
                        <h2 className='text-4xl '>  Q.{data + 1} {question}</h2>
                        <ul>
                            {
                                answers.map((answer, index) => {
                                    return (
                                        <li className='cursor-pointer mt-7 text-2xl bg-amber-200 rounded-2xl px-4 hover:bg-amber-400 ' id={selectedAnswer == answer ? "tenable" : ""} onClick={(e) => handleClick(e, answer)} key={index}>{answer}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            }
>>>>>>> 295d9be5fa9360a35bc350fc0026edac675a7e10

        </div>
    );
}

export default Questions;
