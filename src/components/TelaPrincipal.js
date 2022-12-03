import styled from 'styled-components';
import Footer from './Footer';
import logo from '../img/logo.png';
import Cards from './Cards';
import { Reset, GlobalStyle } from '../Styles/GlobalStyles';
import { useState } from 'react';

function TelaPrincipal() {
    const [answered, setAnswered] = useState(0);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    const cards = [
        {question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        {question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        {question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        {question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        {question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    return (
        <>
            <Reset />
            <GlobalStyle />
            <Aplicativo>
                <DivLogo>
                    <img src={logo} alt="Logo" />
                    <h1>Zap ReCall</h1>
                </DivLogo>
                <Cards cards={cards} answered={answered} setAnswers={setAnswers} answers={answers} setAnswered={setAnswered} setError={setError}/>
                <Footer answered={answered} answers={answers} total={cards.length}  error={error} />
            </Aplicativo>
        </>
    );
}

const Aplicativo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivLogo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 30px 0;
    > img {
        width: 52px;
    }
    > h1 {
        font-family: 'Righteous', sans-serif;
        font-size: 36px;
        line-height: 45px;
        margin-left: 20px;
        color: #fff;
    }
`;

export default TelaPrincipal;