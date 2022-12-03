import styled from "styled-components";
import party from "../img/party.svg";
import sad from "../img/sad.svg";

export default function FinishText({ error }) {

    const topMessage = error ? <TopDiv><img src={sad} alt="sad" /><h1> Putz... </h1></TopDiv> : <TopDiv><img src={party} alt="party" /><h1> Parabéns! </h1></TopDiv>;
    const bottomMessage = error ? <><p>Ainda faltam alguns...</p><p>Mas não desanime!</p></>: <p> Você não esqueceu de nenhum flashcard! </p>;

    const Finish = (
        <FinishTextDiv data-test="finish-text">
            {topMessage}
            {bottomMessage}
        </FinishTextDiv>
    );

    return Finish;
}

const FinishTextDiv = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px; 
    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        text-align: center;
        line-height: 22px;
    }
`; 

const TopDiv = styled.div`
    display: flex;
    margin-bottom: 14px;
    h1{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 700;
    }
    img{
        width: 23px;
        margin: 0 13px;
    }
`;