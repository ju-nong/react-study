import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const MainStyled = styled.main`
    margin: 130px 0px 40px 0;
    background-color: #fff;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

function Main() {
    return (
        <MainStyled>
            <Header />
        </MainStyled>
    );
}

export { Main };
