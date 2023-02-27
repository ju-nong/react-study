import React, { useRef, useMemo, useState } from "react";
import styled from "@emotion/styled";

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageViewer = styled.canvas`
    width: 100%;
    height: 100%;

    border: 3px solid #eee;
`;

const ColorContainer = styled.ul`
    display: flex;
    list-style: none;
    gap: 1px;
    flex-wrap: wrap;
`;

const ColorItem = styled.li`
    width: 30px;
    height: 30px;
    background-color: ${({ color }) => color};
`;

function App() {
    const canvasRef = useRef(null);
    const [uploaded, setUploaded] = useState(false);
    const [pos, setPos] = useState(null);
    const [colors, setColors] = useState(new Set());

    // 이미지 첨부하면 canvas에 그려주기
    function handleImageUpload(event) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () {
                const canvas = canvasRef.current;
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                setUploaded(true);
            };
        };

        setColors(new Set());
    }

    function handleColorPicker() {
        if (!uploaded) {
            return;
        }

        const ctx = canvasRef.current.getContext("2d");
        const { width, height } = ctx.canvas;
        const { data: imageData } = ctx.getImageData(0, 0, width, height);

        const maxWorkers = 9;

        const workers = Array.from({ length: maxWorkers }).fill(
            new Worker(new URL("./components/worker.js", import.meta.url)),
        );

        const chunkSize = imageData.byteLength / maxWorkers;
        let cursor = 0;

        for (let i = 0; i < maxWorkers; i++) {
            workers[i].postMessage({
                dataRef: imageData.slice(cursor, cursor + chunkSize),
            });
            cursor += chunkSize;

            workers[i].onmessage = ({ data }) => {
                const { colorSet } = data;

                setColors((colors) => new Set([...colors, colorSet]));
            };
        }
    }

    return (
        <RootContainer>
            <input type="file" onChange={handleImageUpload} />
            <ImageViewer
                ref={canvasRef}
                onClick={handleColorPicker}
            ></ImageViewer>
            <ColorContainer>
                {Array.from(colors).map((color) => (
                    <ColorItem color={color} key={color}></ColorItem>
                ))}
            </ColorContainer>
        </RootContainer>
    );
}

export default App;
