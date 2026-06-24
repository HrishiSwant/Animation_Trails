import { useEffect, useRef } from "react";
import "./Canvas.css";

export default function Canvas({
  tool,
  color,
  brushSize,
  clearTrigger,
}) {

  const canvasRef = useRef(null);

  const containerRef = useRef(null);

  const drawing = useRef(false);

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

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () =>
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

  }, []);

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

  }, [clearTrigger]);

  function getPos(e) {

    const rect =
      canvasRef.current.getBoundingClientRect();

    return {

      x: e.clientX - rect.left,

      y: e.clientY - rect.top,

    };

  }

  function start(e) {

    drawing.current = true;

    const ctx =
      canvasRef.current.getContext("2d");

    const pos = getPos(e);

    ctx.beginPath();

    ctx.moveTo(pos.x, pos.y);

  }

  function draw(e) {

    if (!drawing.current) return;

    const ctx =
      canvasRef.current.getContext("2d");

    const pos = getPos(e);

    ctx.lineWidth = brushSize;

    ctx.strokeStyle =
      tool === "eraser"
        ? "#0E0E0E"
        : color;

    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();

  }

  function stop() {

    drawing.current = false;

  }

  return (

    <div
      className="canvas"
      ref={containerRef}
    >

      <canvas
        ref={canvasRef}
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={stop}
        onMouseLeave={stop}
      />

    </div>

  );

}
