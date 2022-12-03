import styled from "styled-components";
import partialImage from '../img/icone_quase.svg';
import zapImage from '../img/icone_certo.svg';
import forgottenImage from '../img/icone_erro.svg';




export default function Frontface(props){
    function zap(){
        const result = <img data-test="zap-icon" src={zapImage} alt="zap" />;
        props.setAnswers([...props.answers,result]);
        props.setResult(result);
        props.setStatus("zap");
        reset();
    }

    function forgotten(){
        const result = <img data-test="no-icon" src={forgottenImage} alt="no" />;
        props.setError(true);
        props.setAnswers([...props.answers,result]);
        props.setResult(result);
        props.setStatus("forgotten");
        reset();
    }

    function  partial(){
        const result = <img data-test="partial-icon" src={partialImage} alt="partial" />;
        props.setAnswers([...props.answers,result]);
        props.setResult(result);
        props.setStatus("partial");
        reset();
    }

    function reset(){
        props.setAnswered(props.answered+1);
        props.setTurn(false);
        props.setClicked(false);
    }

    return (
        <BackDiv clicked={props.clicked?1:0}>
            <TextDiv data-test="flashcard-text">{props.answer}</TextDiv>
            <ButtonsDiv>
                <Button data-test="no-btn" onClick={forgotten} color="#ff3030">Não lembrei</Button>
                <Button data-test="partial-btn" onClick={partial} color="#FF922E">Quase não lembrei</Button>
                <Button data-test="zap-btn" onClick={zap} color="#2fbe34">Zap!</Button>
            </ButtonsDiv>
        </BackDiv>
    );
}

const BackDiv = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => (props.clicked?'flex':'none')};
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0;
    padding: 15px;
`;

const TextDiv = styled.div`
    width: 100%;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    margin: 0 auto 10px auto;
`;

const ButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;

`;

const Button = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    background-color: ${props => props.color};
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    margin: 2px;
    border:none;
    margin: 0;
`;