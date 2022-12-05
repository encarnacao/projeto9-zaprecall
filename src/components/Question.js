import styled from 'styled-components';
import playImage from '../img/seta_play.svg';

export default function Question(props) {
    const colors = {zap: "#2fbe34", forgotten: "#ff3030", partial: "#FF922E"};
    const playable = props.status === "none";
    const flashcardText = `Pergunta ${props.num}`;
    const textColor = colors[props.status];
    const playButton = <img data-test="play-btn" onClick={() => props.setClicked(!props.clicked)} src={playImage} alt="play" />;
    return (
        <QuestionDiv textColor={textColor} status={playable ? 0 : 1} clicked={props.clicked ? 1 : 0}>
            <h1 data-test={!props.clicked?"flashcard-text":"none"}>{flashcardText}</h1>
            {playable?playButton:props.result}
        </QuestionDiv>
    );
}

const QuestionDiv = styled.div`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    display: ${props => (props.clicked ? 'none' : 'flex')};
    > h1 {
        font-size: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        line-height: 19px;
        text-decoration: ${props => props.status ? 'line-through' : 'none'};
        text-decoration-thickness: 2px; 
        color: ${props => props.status ? props.textColor : "#000"};
    }
`;