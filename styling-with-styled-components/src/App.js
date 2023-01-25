import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { Dialog } from "./components/Dialog";

const AppBlock = styled.div`
    width: 512px;
    margin: 4rem auto 0 auto;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

function App() {
    const [visible, setVisible] = useState(false);

    const dialogOpen = () => {
        setVisible(true);
    };

    const onConfirm = () => {
        setVisible(false);
    };

    const onCancel = () => {
        setVisible(false);
    };

    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: "#228be6",
                    gray: "#495057",
                    pink: "#f06595",
                },
            }}
        >
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button>BUTTON</Button>
                    <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="gray" size="large">
                        BUTTON
                    </Button>
                    <Button color="gray">BUTTON</Button>
                    <Button color="gray" size="small">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="pink" size="large">
                        BUTTON
                    </Button>
                    <Button color="pink">BUTTON</Button>
                    <Button color="pink" size="small">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button className="dd" size="large" fullWidth>
                        BUTTON
                    </Button>
                    <Button className="dd" size="large" color="gray" fullWidth>
                        BUTTON
                    </Button>
                    <Button
                        className="dd"
                        size="large"
                        color="pink"
                        fullWidth
                        onClick={dialogOpen}
                    >
                        삭제
                    </Button>
                </ButtonGroup>
            </AppBlock>
            <Dialog
                title="정말로 삭제하시겠습니까?"
                confirmText="삭제"
                cancelText="취소"
                onConfirm={onConfirm}
                onCancel={onCancel}
                visible={visible}
            >
                데이터를 정말로 삭제하시겠습니까?
            </Dialog>
        </ThemeProvider>
    );
}

export default App;
