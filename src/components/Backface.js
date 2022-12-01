import styled from "styled-components";

export default function Frontface(props){

    function zap(){
        props.setStatus("zap");
        reset();
    }

    function forgotten(){
        props.setStatus("forgotten");
        reset();
    }

    function  barelyZap(){
        props.setStatus("barely");
        reset();
    }

    function reset(){
        props.setTurn(false);
        props.setClicked(false);
    }

    return (
        <BackDiv clicked={props.clicked?1:0}>
            <p>{props.answer}</p>
            <ButtonsDiv>
                <Button onClick={forgotten} color="#ff3030">Não lembrei</Button>
                <Button onClick={barelyZap} color="#FF922E">Quase não lembrei</Button>
                <Button onClick={zap} color="#2fbe34">Zap!</Button>
            </ButtonsDiv>
        </BackDiv>
    );
}

const BackDiv = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => (props.clicked?'flex':'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        margin: 15px;
    }
`;

const ButtonsDiv = styled.div`
    display: flex;

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
`;