import Flashcard from "./Flashcard";
import styled from "styled-components";


export default function Cards({ cards, answered, setAnswered }) {

    return (
        <CardsDiv>
            {cards.map((card, index) => <Flashcard 
            key={card.num} 
            num={card.num} 
            question={card.question} 
            answer={card.answer} 
            answered={answered}
            setAnswered={setAnswered} />)}
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