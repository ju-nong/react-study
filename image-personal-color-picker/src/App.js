import React, { useRef, useMemo, useState } from "react";
import styled from "@emotion/styled";

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
    // const worker = new Worker(
    //     new URL("./components/worker.js", import.meta.url),
    // );

    // worker.postMessage("Hello");

    // worker.onmessage = (event) => {
    //     console.log("client", event);
    // };

    const [colors, setColors] = useState([]);
    const canvasRef = useRef(null);

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
            };
        };
    }

    function handleGetImageData() {
        const ctx = canvasRef.current.getContext("2d");
        const { width, height } = ctx.canvas;
        const { data: imageData } = ctx.getImageData(0, 0, width, height);

        const mainSet = new Set();
        // const start = performance.now();
        for (let i = 0; i < imageData.length; i += 4) {
            const nextRGBA = `rgba(${imageData[i]}, ${imageData[i + 1]}, ${
                imageData[i + 2]
            }, ${imageData[i + 3]})`.replace(/\n/g, "");
            mainSet.add(nextRGBA);
        }
        // const end = performance.now();
        setColors([...mainSet].slice(0, 30));
    }

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <canvas ref={canvasRef} onClick={handleGetImageData}></canvas>
            <ColorContainer>
                {colors.map((color) => (
                    <ColorItem color={color} key={color}></ColorItem>
                ))}
            </ColorContainer>
        </div>
    );
}

export default App;
