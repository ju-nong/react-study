import styled from "styled-component";

const HeaderBlock = styled.header``;

const Title = styled.h1`
    position: absolute;
    top: -132px;
    width: 100%;
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    z-index: -1;
`;

const Copyright = styled.div`
    text-align: center;
    color: #bfbfbf;
    font-size: 10px;
    line-height: 2;
    margin-bottom: 20px;

    a {
        color: #bfbfbf;
    }
`;

function Header() {
    <HeaderBlock>
        <Title>todos</Title>
        <Input />
    </HeaderBlock>;
}
