import logo from '../img/logo.png';
import styled from 'styled-components';

export default function Logo() {
    return (
        <DivLogo>
            <img src={logo} alt="Logo" />
            <h1>Zap ReCall</h1>
        </DivLogo>
    );
}

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