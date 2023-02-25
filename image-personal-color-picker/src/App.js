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
    const [colors, setColors] = useState([]);
    const canvasRef = useRef(null);

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
            };
        };
    }

    // color 추출
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

    // worker를 이용한 color 추출
    function handleGetImageDataWithWorkers() {
        const ctx = canvasRef.current.getContext("2d");
        const { width, height } = ctx.canvas;
        const { data: imageData } = ctx.getImageData(0, 0, width, height);

        const maxWorkers = 10000;

        const workers = Array.from({ length: maxWorkers }).fill(
            new Worker(new URL("./components/worker.js", import.meta.url)),
        );

        const chunkSize = imageData.byteLength / maxWorkers;
        let cursor = 0;

        const colorObj = {};

        for (let i = 0; i < maxWorkers; i++) {
            workers[i].postMessage({
                dataRef: imageData.slice(cursor, cursor + chunkSize),
            });
            cursor += chunkSize;

            workers[i].onmessage = ({ data }) => {
                const { colorSet } = data;
                let temp = -1;

                for (let item of colorSet) {
                    temp = colorObj[item] ?? 0;
                    colorObj[item] = temp + 1;
                }
            };
        }

        setTimeout(() => {
            const entries = Object.entries(colorObj);

            entries.sort((a, b) => b[1] - a[1]);

            const sortedKeys = [];

            for (let i = 0; i < 10; i++) {
                sortedKeys.push(entries[i][0]);
            }

            console.log(sortedKeys);
            setColors([...sortedKeys]);
        }, 10000);
    }

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <canvas
                ref={canvasRef}
                onClick={handleGetImageDataWithWorkers}
            ></canvas>
            <ColorContainer>
                {colors.map((color) => (
                    <ColorItem color={color} key={color}></ColorItem>
                ))}
            </ColorContainer>
        </div>
    );
}

export default App;
