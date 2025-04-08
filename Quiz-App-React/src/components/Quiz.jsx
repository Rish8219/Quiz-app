import React, { useState } from 'react'
import Questions from './Questions'

function Quiz() {

  const dataBase = [{
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correct: 1
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correct: 1
  },
  {
    question: "Which instrument has black and white keys?",
    answers: ["Guitar", "Violin", "Piano", "Drums"],
    correct: 2
  },
  {
    question: "Which continent is home to the Amazon Rainforest?",
    answers: ["Africa", "Asia", "South America", "Australia"],
    correct: 2
  },
  {
    question: "Which animal is known for changing colors?",
    answers: ["Chameleon", "Elephant", "Giraffe", "Zebra"],
    correct: 0
  },
  {
    question: "Which bird is the symbol of peace?",
    answers: ["Eagle", "Dove", "Owl", "Parrot"],
    correct: 1
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: ["50°C", "75°C", "100°C", "150°C"],
    correct: 2
  }
  ]
  const [data, setData] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [selected, setSelected] = useState(false)
  const [hide, setHide] = useState(0)
  const [score, setScore] = useState(0)
  const [cancel, setCancel] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)

  //next button
  const handleButton = () => {

    let answer = dataBase[data].answers.indexOf(selectedAnswer)
    if (answer == dataBase[data].correct) {
      setScore(score + 1)
      setData(data + 1)
      setSelectedAnswer(null)
      setHide(0)
      setCancel(false)
      setSelected(false)

    }
    else {
      setHide(hide + 1)
      setData(data)
      setScore(score - 1)
      setSelectedAnswer(false)
      setSelectedAnswer(null)
      setCancel(false)

    }

    if (data + 1 >= dataBase.length) {
      setQuizFinished(true)
    }
  }
  const handleClick = (e, answer) => {
    e.stopPropagation()
    setSelected(true)
    setCancel(true)
    setSelectedAnswer(answer)


  }
  const handleShowBtn = () => {
    let correctData = dataBase[data].correct
    console.log(correctData);
    let correct = dataBase[data].answers[correctData];
    setSelectedAnswer(correct)
    setCancel(true)

  }
  const handleBackButton = () => {
    setCancel(false)
    setSelectedAnswer(null)
  }


  return (
    <div className=' bg-gradient-to-r from-blue-500 to-purple-500 h-166.5'>
      <div className='container '>
        {quizFinished ? (
          <div className="flex-col justify-items-center justify-self-center p-40 rounded-2xl content-center">
            <div className='glasseffect text-center shadow-2xl shadow-black rounded-2xl w-11/12 p-10  text-4xl'>
              <h1 className=''>Quiz Finished!</h1>
              {score == dataBase.length ? <h2>You are genius Very good</h2> : <h2>Not a good score Newbie </h2>}
              <h2 className='mt-4'>Your Score: {score} out of {dataBase.length}</h2>
              <button className='mt-5 p-3 bg-red-500 hover:bg-red-700 text-white rounded-xl cursor-pointer' onClick={() => {
                setData(0);
                setScore(0);
                setQuizFinished(false);
                setSelectedAnswer(null);
              }}> Restart Quiz </button>

            </div>
          </div>

        ) : (
          <div className='flex-col justify-items-center'>
            <h1 className='select-none text-5xl text-white text-center font-bold py-4'>Your Score: {score}</h1>
            <div className="glasseffect flex-col justify-items-center mt-2 rounded-2xl  w-95 h-auto p-2 content-center">
              <Questions question={dataBase[data].question} answers={dataBase[data].answers} data={data} handleClick={handleClick} selectedAnswer={selectedAnswer} />
              <button disabled={selectedAnswer == null} className={selectedAnswer == null ? "disabled text-xl ml-2 bg-gray-500 cursor-no-drop border-0 outline-0 mt-15 w-25 p-3 rounded-2xl" : 'text-xl bg-blue-400 border-0 outline-0 mt-15 ml-2 w-25 p-3 cursor-pointer rounded-2xl'} onClick={handleButton}>
                Next
              </button>
              {hide == 2 && <button className='border-none mt-5 w-25 p-3 rounded-2xl bg-green-400 text-xl ml-2 cursor-pointer' onClick={handleShowBtn}>Show</button>}
              {cancel && <button className='border-none mt-5 w-25 p-3 rounded-2xl bg-red-400 text-xl ml-2 cursor-pointer' onClick={handleBackButton}>Cancel</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );

}

export default Quiz
