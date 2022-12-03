import { useState } from 'react';
import styled from 'styled-components';
import Frontface from './Frontface';
import Question from './Question';
import Backface from './Backface';

export default function Flashcard(props) {
    const [clicked, setClicked] = useState(false);
    const [turn, setTurn] = useState(false);
    const [status, setStatus] = useState("none");
    const [cardText, setCardText] = useState(`Pergunta ${props.num}`);
    return (
        <FlashcardDiv data-test="flashcard" clicked={clicked ? 1 : 0} >
            <FrontFaceDiv clicked={clicked ? 1 : 0} turn={turn ? 1 : 0}>
                <Question 
                num={props.num} 
                status={status} 
                clicked={clicked} 
                setClicked={setClicked}
                cardText = {cardText}
                setCardText = {setCardText}
                question={props.question}
                />
                <Frontface
                    clicked={clicked}
                    question={props.question}
                    setTurn={setTurn}
                    turn={turn}
                    setCardText={setCardText}
                    answer={props.answer}
                />
            </FrontFaceDiv>
            <BackFaceDiv clicked={clicked ? 1 : 0} turn={turn ? 1 : 0}>
                <Backface 
                    num = {props.num}
                    clicked={clicked}
                    setClicked={setClicked}
                    answer={props.answer}
                    setTurn={setTurn}
                    turn={turn}
                    setStatus={setStatus}
                    setAnswered={props.setAnswered}
                    answered={props.answered}
                    setCardText={setCardText}
                />
            </BackFaceDiv>
        </FlashcardDiv>
    );
}

const FlashcardDiv = styled.div`
    width: 80%;
    min-height: ${props => props.clicked ? "140px" : "65px"};
    background: ${props => props.clicked ? "transparent" : "#fff"};
    border-radius: 5px;
    box-shadow: ${props=>props.clicked?"none":"0px 4px 5px rgba(0,0,0,0.15)"};
    transition: all 0.5s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: relative;
    margin: 10px 0;
`;

const FrontFaceDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.clicked ? "#ffffd5" : "#fff"};
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    transition: all 0.5s;
    transform-style: preserve-3d;
    transform: ${props => props.turn ? "rotateY(180deg)" : "rotateY(0deg)"};
    backface-visibility: hidden;
`;

const BackFaceDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffd5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    transition: all 0.5s;
    transform-style: preserve-3d;
    transform: ${props => props.turn ? "rotateY(0deg)" : "rotateY(180deg)"};
    backface-visibility: hidden;
`;