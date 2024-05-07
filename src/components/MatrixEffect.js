import React, { useEffect } from "react";
import "./MatrixEffect.css";

const MatrixEffect = () => {
    useEffect(() => {
        const canvas = document.getElementById("matrix-canvas");
        const ctx = canvas.getContext("2d");

        const w = (canvas.width = document.body.offsetWidth);
        const h = (canvas.height = document.body.offsetHeight);
        const cols = Math.floor(w / 20) + 1;
        const ypos = Array(cols).fill(0);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, w, h);

        function matrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = "#ffb400";
            ctx.font = "15pt monospace";

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        }

        const intervalId = setInterval(matrix, 50);

        return () => clearInterval(intervalId);
    }, []);

    return <canvas id="matrix-canvas" className="matrix-canvas" />; // Add className for styling
};

export default MatrixEffect;
