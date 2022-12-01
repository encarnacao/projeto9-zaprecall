import Flashcard from "./Flashcard";
import styled from "styled-components";


export default function Cards({cards}){

    return (
        <CardsDiv>
            {cards.map((card, index) => <Flashcard key={card.num} num={card.num} question={card.question} answer={card.answer} />)}
        </CardsDiv>
    );

}


const CardsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;