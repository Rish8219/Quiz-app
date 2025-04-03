import React from 'react';

const Questions = ({ question, answers, data, handleClick, selectedAnswer, score, dataBox,quizFinished }) => {
    console.log(dataBox.length-1);
    console.log(data);


    return (

        <div >
            {

// quizFinished? <div><h1>Your Score : {score} out of </h1></div> :
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

        </div>
    );
}

export default Questions;
