import styled from 'styled-components';
import barelyImage from '../img/icone_quase.svg';
import zapImage from '../img/icone_certo.svg';
import forgottenImage from '../img/icone_erro.svg';
import playImage from '../img/seta_play.svg';


export default function Question(props) {
    const colors = {zap: "#2fbe34", forgotten: "#ff3030", barely: "#FF922E"};
    const imageCorrespondence = { zap: zapImage, barely: barelyImage, forgotten: forgottenImage };
    const playable = props.status === "none";
    const textColor = colors[props.status];
    const playButton = <img onClick={() => props.setClicked(!props.clicked)} src={playImage} />;
    const result = <img src={imageCorrespondence[props.status]} />;
    return (
        <QuestionDiv textColor={textColor} status={playable ? 0 : 1} clicked={props.clicked ? 1 : 0}>
            <div>
                <h1>Pergunta {props.num}</h1>
            </div>
            {playable?playButton:result}
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
    > div {
        font-size: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        line-height: 19px;
        text-decoration: ${props => props.status ? 'line-through' : 'none'};
        text-decoration-thickness: 2px; 
        color: ${props => props.status ? props.textColor : "#000"};
    }
`;