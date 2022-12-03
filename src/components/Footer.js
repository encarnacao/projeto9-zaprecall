import styled from 'styled-components';

export default function Footer({answered, total}) {
    return (
        <DivFooter data-test="footer">
            <FooterContent>
                <p>{answered}/{total} CONCLUIDO</p>
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
`;

const FooterContent = styled.div`
    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
    }
`;
