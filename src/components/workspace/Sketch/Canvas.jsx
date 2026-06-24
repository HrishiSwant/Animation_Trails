import { useEffect, useRef, useState } from "react";
import "./Canvas.css";

export default function Canvas() {

  const canvasRef = useRef(null);

  const containerRef = useRef(null);

  const drawing = useRef(false);

  const [color] = useState("#ffffff");

  const [brushSize] = useState(4);

  useEffect(() => {

    const canvas = canvasRef.current;

    const container = containerRef.current;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {

      canvas.width = container.clientWidth;

      canvas.height = container.clientHeight;

      ctx.lineCap = "round";

      ctx.lineJoin = "round";

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () =>
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

  }, []);

  function getPosition(e) {

    const rect =
      canvasRef.current.getBoundingClientRect();

    return {

      x: e.clientX - rect.left,

      y: e.clientY - rect.top,

    };

  }

  function startDrawing(e) {

    drawing.current = true;

    const ctx =
      canvasRef.current.getContext("2d");

    const pos = getPosition(e);

    ctx.beginPath();

    ctx.moveTo(pos.x, pos.y);

  }

  function draw(e) {

    if (!drawing.current) return;

    const ctx =
      canvasRef.current.getContext("2d");

    const pos = getPosition(e);

    ctx.strokeStyle = color;

    ctx.lineWidth = brushSize;

    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();

  }

  function stopDrawing() {

    drawing.current = false;

  }

  return (

    <div
      className="canvas"
      ref={containerRef}
    >

      <canvas

        ref={canvasRef}

        onMouseDown={startDrawing}

        onMouseMove={draw}

        onMouseUp={stopDrawing}

        onMouseLeave={stopDrawing}

      />

    </div>

  );

}
