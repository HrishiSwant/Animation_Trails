import { useEffect, useRef } from "react";
import "./Canvas.css";

export default function Canvas({
  tool,
  color,
  brushSize,
  clearTrigger,
}) {

  /* ===========================
      REFERENCES
  =========================== */

  const canvasRef = useRef(null);

  const containerRef = useRef(null);

  const drawing = useRef(false);

  const strokes = useRef([]);

  const currentStroke = useRef(null);

  /* ===========================
      INITIALIZE CANVAS
  =========================== */

  useEffect(() => {

    const canvas = canvasRef.current;

    const container = containerRef.current;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {

      canvas.width = container.clientWidth;

      canvas.height = container.clientHeight;

      ctx.lineCap = "round";

      ctx.lineJoin = "round";

      renderCanvas();

    }

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

    };

  }, []);

  /* ===========================
      CLEAR CANVAS
  =========================== */

  useEffect(() => {

    strokes.current = [];

    currentStroke.current = null;

    renderCanvas();

  }, [clearTrigger]);

  /* ===========================
      RENDER ENGINE
  =========================== */

  function renderCanvas() {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    strokes.current.forEach(drawStroke);

    if (currentStroke.current) {

      drawStroke(currentStroke.current);

    }

  }

  function drawStroke(stroke) {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    if (stroke.points.length < 2) return;

    ctx.beginPath();

    ctx.lineWidth = stroke.size;

    ctx.strokeStyle = stroke.color;

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

    ctx.moveTo(
      stroke.points[0].x,
      stroke.points[0].y
    );

    stroke.points.forEach(point => {

      ctx.lineTo(point.x, point.y);

    });

    ctx.stroke();

  }

  /* ===========================
      POSITION
  =========================== */

  function getMousePosition(e) {

    const rect =
      canvasRef.current.getBoundingClientRect();

    return {

      x: e.clientX - rect.left,

      y: e.clientY - rect.top,

    };

  }

  function getTouchPosition(e) {

    const rect =
      canvasRef.current.getBoundingClientRect();

    return {

      x: e.touches[0].clientX - rect.left,

      y: e.touches[0].clientY - rect.top,

    };

  }

  /* ===========================
      PART 1B
      (Drawing Logic)
  =========================== */

  return (

    <div
      className="canvas"
      ref={containerRef}
    >

      <canvas
        ref={canvasRef}
      />

    </div>

  );

}
