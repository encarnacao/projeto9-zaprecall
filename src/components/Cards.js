import Flashcard from "./Flashcard";
import styled from "styled-components";


export default function Cards({ cards, answered, answers, setAnswered, setAnswers }) {

    return (
        <CardsDiv>
            {cards.map((card, index) => <Flashcard 
            key={index + 1} 
            num={index + 1} 
            question={card.question} 
            answer={card.answer}
            answers = {answers}
            answered={answered}
            setAnswered={setAnswered}
            setAnswers={setAnswers}
            />)}
        </CardsDiv>
    );

}


const CardsDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin: 0 auto 0 auto;
    flex-direction: column;
    align-items: center;
`;