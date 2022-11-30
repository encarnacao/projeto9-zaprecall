import styled from 'styled-components';
import { Reset, GlobalStyle } from './Styles/GlobalStyles';

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Aplicativo>
        <h1>
          Hello World
        </h1>
      </Aplicativo>
    </div>
  );
}

const Aplicativo = styled.div`
  text-align: center;
  background: #323844;
  height: 100vh;
  h1{
    color: #fff;
    font-size: 50px;
    font-weight: 700;
  }
`;

export default App;