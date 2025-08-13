import { useEffect, useState } from "react";
import "./App.css";

type Card = {
  type: string;
  text: string;
};

function App() {
  const welcomeCard = { type: "question", text: "Hello" };
  const cards = [
    { type: "question", text: "How are you really?" },
    { type: "question", text: "What is your favourite memory?" },
    { type: "question", text: "What is your favourite way to relax?" },
    { type: "question", text: "What is the latest book you have read?" },
    { type: "wildcard", text: "Wildcard" },
  ];

  const [drawnCard, setDrawnCard] = useState<Card>(welcomeCard);
  const [cardDeck, setCardDeck] = useState<Card[]>(cards);
  const [drawnCardsDeck, setDrawnCardsDeck] = useState<Card[]>([]);

  const totalCards = cardDeck.length;
  function getRandomCardIndex(): number {
    return Math.floor(Math.random() * totalCards);
  }

  function drawCard() {
    const currentCard = cardDeck.splice(getRandomCardIndex(), 1)[0];
    setDrawnCard(currentCard);
    const updatedCardDeck = [...cardDeck];

    setCardDeck(updatedCardDeck);
    setDrawnCardsDeck([...drawnCardsDeck, currentCard]);
  }

  function startAgain() {
    setDrawnCard(welcomeCard);
    setCardDeck(cards);
    setDrawnCardsDeck([]);
  }

  return (
    <>
      <h1 className="title">We're not really strangers</h1>
      <p className="subtitle">Emotions might arise</p>
      <section className="wrapper">
        {cardDeck.length > 0 ? (
          <>
            <article
              className={
                drawnCard.type == "question" ? "card" : "card card-red"
              }
            >
              <h2 className="card-question">{drawnCard.text}</h2>
              <p className="card-footer">We're not really strangers</p>
            </article>
            <article className="card card-red" onClick={() => drawCard()}>
              <h2 className="card-question">Level 1</h2>
              <p className="card-question">( perception )</p>
              <p className="card-footer">We're not really strangers</p>
            </article>
          </>
        ) : (
          <>
            <article className="card" onClick={() => startAgain()}>
              <h2 className="card-question">
                That's it. How are you feeling now?
              </h2>
              <p className="card-question">
                ( no more questions in the deck. click to start over )
              </p>
              <p className="card-footer">We're not really strangers</p>
            </article>
            <article className="card card-red"></article>
          </>
        )}
      </section>
    </>
  );
}

export default App;
