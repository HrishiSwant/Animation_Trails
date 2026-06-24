import { useEffect, useRef } from "react";
import "./Canvas.css";

import Engine from "./engine/Engine";
import InputManager from "./engine/InputManager";

export default function Canvas({
  tool,
  color,
  brushSize,
  clearTrigger,
}) {

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const engineRef = useRef(null);
  const inputRef = useRef(null);

  /* ===========================
      INITIALIZE ENGINE
  =========================== */

  useEffect(() => {

    const canvas = canvasRef.current;

    const container = containerRef.current;

    const engine = new Engine(canvas);

    engine.initialize();

    engine.setTool(tool);
    engine.setColor(color);
    engine.setBrushSize(brushSize);

    engineRef.current = engine;

    inputRef.current = new InputManager(
      canvas,
      engine
    );

    function resizeCanvas() {

      engine.resize(

        container.clientWidth,

        container.clientHeight

      );

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

      inputRef.current?.destroy();

      engine.destroy();

    };

  }, []);

  /* ===========================
      TOOL CHANGES
  =========================== */

  useEffect(() => {

    if (!engineRef.current) return;

    engineRef.current.setTool(tool);

  }, [tool]);

  useEffect(() => {

    if (!engineRef.current) return;

    engineRef.current.setColor(color);

  }, [color]);

  useEffect(() => {

    if (!engineRef.current) return;

    engineRef.current.setBrushSize(brushSize);

  }, [brushSize]);

  /* ===========================
      CLEAR
  =========================== */

  useEffect(() => {

    if (!engineRef.current) return;

    engineRef.current.clear();

  }, [clearTrigger]);

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
