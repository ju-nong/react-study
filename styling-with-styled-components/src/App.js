import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";

const AppBlock = styled.div`
    width: 512px;
    margin: 4rem auto 0 auto;
    border: 1px solid black;
    padding: 1rem;
`;

function App() {
    return (
        <AppBlock>
            <Button>BUTTON</Button>
        </AppBlock>
    );
}

export default App;
