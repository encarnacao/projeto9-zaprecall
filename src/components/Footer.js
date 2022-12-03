import FinishText from './FinishText';
import styled from 'styled-components';

export default function Footer({answered, total, answers, error}) {
    return (
        <DivFooter>
            <FooterContent data-test="footer">
                {answered === total && <FinishText answers={answers} error={error}/>}
                <p>{answered}/{total} CONCLUIDO</p>
                <Icons>{answers}</Icons>
            </FooterContent>
        </DivFooter>
    );
}

const DivFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 70px;
    background: #fff;
    box-shadow: 0px -4px 6px rgba(0,0,0,0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
    }
`;


const Icons = styled.div`
    margin: 5px;
    display: flex;
    > img{
        width: 23px;
        margin: 0 2px;
    }
`;