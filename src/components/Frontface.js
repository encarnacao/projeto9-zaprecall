import styled from "styled-components";
import turn from "../img/seta_virar.svg";

export default function Frontface(props){
    return (
        <FrontDiv clicked={props.clicked?1:0}>
            <p>{props.question}</p>
            <Turn onClick={()=>props.setTurn(!props.turn)} src={turn} alt="Virar" />
        </FrontDiv>
    );
}

const FrontDiv = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => (props.clicked?'flex':'none')};
    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        margin: 15px;
    }
`;

const Turn = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
`;