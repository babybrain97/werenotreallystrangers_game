import { useState } from 'react'
import './App.css'

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [{ question: "Hello"
  }, { question: "How are you really?"
}, { question: "What is your favourite memory?"
}, { question: "What is your favourite way to relax?"
},{ question: "What is the latest book you have read?"
}]

const totalQuestions = questions.length;

console.log(totalQuestions);
   
  function nextQuesiton() {
    return (questionIndex + 1) === totalQuestions ? setQuestionIndex(0) : setQuestionIndex(questionIndex + 1)
  }

  function previousQuestion() {
    return questionIndex === 0 ? setQuestionIndex(totalQuestions - 1) : setQuestionIndex(questionIndex - 1)
  }

  function getRandomQuestionIndex(): number {
  return Math.floor(Math.random() * (totalQuestions));
}

  return (
    <>
      <h1 className="red-text">Emotions might arise</h1>
      <h2 className="red-text">We're not really strangers</h2>
      <div className="card">
        <p>{questionIndex+1} / {totalQuestions}</p>
        <button onClick={() => setQuestionIndex(getRandomQuestionIndex())}>Random question</button>
        <div className="play-card">
          <p>{questions[questionIndex].question}</p>
        </div>
        <div className="button-section">
        <button onClick={() => previousQuestion()}>Previous</button>
        <button onClick={() => nextQuesiton()}>Next</button>
        </div>

      </div>
    </>
  )
}

export default App
