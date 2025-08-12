import { useState } from 'react'
import './App.css'

function App() {
  const [cardIndex, setcardIndex] = useState(0);

  const cards = [{ type: "question", text: "Hello"
  }, { type: "question", text: "How are you really?"
}, { type: "question", text: "What is your favourite memory?"
}, { type: "question", text: "What is your favourite way to relax?"
},{ type: "question", text: "What is the latest book you have read?"
}, { type: "wildcard", text: "Wildcard"
}]

const totalCards = cards.length;
   
  function nextCard() {
    return (cardIndex + 1) === totalCards ? setcardIndex(0) : setcardIndex(cardIndex + 1)
  }

  function previousCard() {
    return cardIndex === 0 ? setcardIndex(totalCards - 1) : setcardIndex(cardIndex - 1)
  }

  function getRandomCardIndex(): number {
  return Math.floor(Math.random() * (totalCards));
}

  return (
    <>
      <h1 className="title">We're not really strangers</h1>
      <p className="subtitle">Emotions might arise</p>
      <section className="wrapper">
        {/* <p>{cardIndex+1} / {totalQuestions}</p> */}
        <article className={(cards[cardIndex].type == 'question') ? "card" : "card card-red"}>
          <h2 className="card-question">{cards[cardIndex].text}</h2>
          <p className="card-footer">We're not really strangers</p>
        </article>
{/* 
          <div className="button-section">
        <button onClick={() => previousCard()}>Previous</button>
        <button onClick={() => setcardIndex(getRandomcardIndex())}>Random question</button>
        <button onClick={() => nextCard()}>Next</button>
        </div> */}

        <article className="card card-red" onClick={() => setcardIndex(getRandomCardIndex())}>
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
