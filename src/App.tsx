import { useState } from 'react'
import './App.css'

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [{ type: "question", text: "Hello"
  }, { type: "question", text: "How are you really?"
}, { type: "question", text: "What is your favourite memory?"
}, { type: "question", text: "What is your favourite way to relax?"
},{ type: "question", text: "What is the latest book you have read?"
}, { type: "wildcard", text: "Wildcard"
}]

const totalQuestions = questions.length;
   
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
      <h1 className="title">We're not really strangers</h1>
      <p className="subtitle">Emotions might arise</p>
      <section className="wrapper">
        {/* <p>{questionIndex+1} / {totalQuestions}</p> */}
        <article className={(questions[questionIndex].type == 'question') ? "card" : "card card-red"}>
          <h2 className="card-question">{questions[questionIndex].text}</h2>
          <p className="card-footer">We're not really strangers</p>
        </article>
{/* 
          <div className="button-section">
        <button onClick={() => previousQuestion()}>Previous</button>
        <button onClick={() => setQuestionIndex(getRandomQuestionIndex())}>Random question</button>
        <button onClick={() => nextQuesiton()}>Next</button>
        </div> */}

        <article className="card card-red" onClick={() => setQuestionIndex(getRandomQuestionIndex())}>
          <h2 className="card-question">Level 1</h2>
          <p className="card-question">( perception )</p>
          <p className="card-footer">We're not really strangers</p>
        </article>

        {/* <article className="card card-red">
          <h2 className="card-question">Level 2</h2>
          <p className="card-question">( reflection )</p>
          <p className="card-footer">We're not really strangers</p>
        </article>

        <article className="card card-red">
          <h2 className="card-question">Level 3</h2>
          <p className="card-question">( reflection )</p>
          <p className="card-footer">We're not really strangers</p>
        </article> */}

      </section>
    </>
  )
}

export default App
