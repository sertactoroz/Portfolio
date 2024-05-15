import React, { useEffect, useRef } from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
    const canvasRef = useRef(null);
    const matrixRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 60;
        canvas.height = 30;

        const imageUrls = [
            "https://raw.githubusercontent.com/HevalNergiz/html-dot-matrix/main/Frame-5.jpg",
            "https://raw.githubusercontent.com/HevalNergiz/html-dot-matrix/main/Frame-6.jpg",
            "https://raw.githubusercontent.com/HevalNergiz/html-dot-matrix/main/Frame-7.jpg",
            "https://raw.githubusercontent.com/HevalNergiz/html-dot-matrix/main/Frame-8.jpg"
        ];

        let currentImageIndex = 0;

        function updateImage() {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = function () {
                ctx.drawImage(img, 0, 0, 60, 30);
                const imageData = ctx.getImageData(0, 0, 60, 30);
                const data = imageData.data;
                const matris = [];
                for (let i = 0; i < data.length; i += 4) {
                    const grey = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    const row = Math.floor(i / 4 / 60);
                    if (!matris[row]) {
                        matris[row] = [];
                    }
                    matris[row].push(grey < 128 ? 1 : 0);
                }

                createSymbol(matris);
            };

            img.src = imageUrls[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        }

        setInterval(updateImage, 300);

        const matrix = matrixRef.current;
        for (let i = 0; i < 1800; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            matrix.appendChild(dot);
        }

        function createSymbol(matris) {
            const dots = matrix.querySelectorAll(".dot");
            matris.forEach((row, rowIndex) => {
                row.forEach((col, colIndex) => {
                    const dotIndex = rowIndex * 60 + colIndex;
                    const dot = dots[dotIndex];

                    if (col === 1) {
                        dot.classList.add("active");
                    } else {
                        dot.classList.remove("active");
                    }
                });
            });
        }
    }, []);

    return (
        <div className="border-score score-board">
            <div id="matrix" ref={matrixRef}></div>
            <canvas id="canvas" style={{ display: 'none' }} ref={canvasRef}></canvas>
        </div>
    );
};

export default ScoreBoard;
