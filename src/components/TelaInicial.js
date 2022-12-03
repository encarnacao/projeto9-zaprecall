import logo from '../img/logo.png';
import styled from 'styled-components';
import { Reset, GlobalStyle } from '../Styles/GlobalStyles';

export default function TelaInicial({setPrincipal}){
    return (
        <Wrapper>
            <Reset />
            <GlobalStyle />
            <LogoDiv>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
                <BotaoIniciar data-test="start-btn" onClick={() => setPrincipal(true)}>Iniciar Recall!</BotaoIniciar>
            </LogoDiv>
        </Wrapper>
    );

}

const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    flex-direction: column;
    > h1{
        font-family: 'Righteous', sans-serif;
        font-size: 36px;
        color: #fff;
        margin: 20px 0 0 0;
    }
    > img{
        width: 136px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;   
    height: 100vh;
`;

const BotaoIniciar = styled.button`
    width: 250px;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: none;
    margin-top: 30px;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #d70900;
`;