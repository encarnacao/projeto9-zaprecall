import styled from 'styled-components';
import Footer from './Footer';
import Logo from './Logo';
import Cards from './Cards';
import { Reset, GlobalStyle } from '../Styles/GlobalStyles';
import { useState } from 'react';

function TelaPrincipal() {
    const [answered, setAnswered] = useState(0);

    const cards = [
        {num:1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        {num:2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        {num:3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        {num:4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {num:5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        {num:6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        {num:7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        {num:8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (
        <>
            <Reset />
            <GlobalStyle />
            <Aplicativo>
                <Logo />
                <Cards cards={cards} />
                <Footer answered={answered} total={cards.length}/>
            </Aplicativo>
        </>
    );
}

const Aplicativo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb6b6b;
  height: 100vh;
  margin: 0 0 70px 0;
`;

export default TelaPrincipal;