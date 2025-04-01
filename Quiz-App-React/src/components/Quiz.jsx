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
  const [score, setScore] = useState(Number())


  const handleButton = () => {

    let answer = dataBase[data].answers.indexOf(selectedAnswer)
    if (answer == dataBase[data].correct) {
      setScore(score + 1)
      setData(data + 1)
      setSelectedAnswer(null)
      setHide(0)

    }
    else {

      alert("Incorrect")
      setHide(hide + 1)
      setData(data)
      setScore(score - 1)
    }

    if (data > dataBase.length - 1) {
      alert(`Quiz Finished Your Score was ${score}out of ${dataBase.length}`)
      setData(0)
      setScore(0)

    }

    // console.log(dataBase.length - 1);
    // console.log(data);
  }
  const handleClick = (e, answer) => {
    e.stopPropagation()

    setSelectedAnswer(answer)
    // console.log(answer)

  }
  const handleShowBtn = () => {

    if (!selected) {
      setSelected(true)
      let correctData = dataBase[data].correct
      console.log(correctData);
      let correct = dataBase[data].answers[correctData];
      setSelectedAnswer(correct)
    }
    else {
      setSelected(false)
      setSelectedAnswer(null)
    }
  }
  const handleDiv = () => {

    setSelectedAnswer(null)
  }
  return (
    <div className='bg-[#97866A]'>
      <div className='container h-screen'>
        <h1 className='text-4xl text-black text-center py-10' >Your Score:{score}</h1>
        <div className="flex-col justify-items-center justify-self-center mt-5 rounded-2xl bg-[#F5EEDC] w-1/3 h-11/13 p-2 content-center" onClick={handleDiv}>
          <Questions question={dataBase[data].question} answers={dataBase[data].answers} data={data} handleClick={handleClick} selectedAnswer={selectedAnswer} score={score} dataBox={dataBase} />
          <button disabled={selectedAnswer == null} id={selectedAnswer ? "enabled" : "disabled"} className='text-xl border-0 outline-0 mt-15 w-25 p2 rounded-2xl' onClick={handleButton}>Next Question</button>
          {hide >= 2 ? <button className=' border-none outline-0 mt-5 w-25 px-3 rounded-2xl bg-green-400 text-xl ml-2 cursor-pointer' onClick={handleShowBtn}>Show Answer</button> : ""}

        </div>
      </div>
    </div>
  )
}

export default Quiz
