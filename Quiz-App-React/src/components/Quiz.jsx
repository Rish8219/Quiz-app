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
    <div className='bg-[#97866A] h-screen'>
      <div className='container '>
        {quizFinished ? (
          <div className="flex-col justify-items-center justify-self-center rounded-2xl p-50 content-center">
          <div className='text-center bg-amber-200 rounded-2xl w-11/12 p-10  text-4xl'>
            <h1 className=''>Quiz Finished!</h1>
            {score==dataBase.length?<h2>You are genius Very good</h2>:<h2>Not a good score Newbie </h2>}
            <h2>Your Score: {score} out of {dataBase.length}</h2>
            <button className='mt-5 p-3 bg-orange-500 text-white rounded-xl cursor-pointer' onClick={() => {
              setData(0);
              setScore(0);
              setQuizFinished(false); 
              setSelectedAnswer(null);
            }}> Restart Quiz </button>

          </div>
          </div>

        ) : (
          <div className=' flex-col justify-items-center'>
            <h1 className='text-4xl text-black text-center py-10'>Your Score: {score}</h1>
            <div className="flex-col justify-items-center mt-3 rounded-2xl bg-[#F5EEDC] w-1/3 h-11/13 p-2 content-center">
              <Questions question={dataBase[data].question} answers={dataBase[data].answers} data={data} handleClick={handleClick} selectedAnswer={selectedAnswer} score={score} dataBox={dataBase} quizFinished={quizFinished} />
              <button disabled={selectedAnswer == null} className='text-xl bg-orange-400 border-0 outline-0 mt-15 w-25 p-3 rounded-2xl' onClick={handleButton}>
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
