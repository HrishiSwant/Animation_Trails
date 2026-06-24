import { useEffect, useRef } from "react";
import "./Canvas.css";

import Engine from "./engine/Engine";
import InputManager from "./engine/InputManager";
import SketchRegistry from "../../../core/sketch/SketchRegistry";

export default function Canvas({
  tool,
  color,
  brushSize,
  clearTrigger,
  onEngineReady,
}) {

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const engineRef = useRef(null);
  const inputRef = useRef(null);

  const hasMountedRef = useRef(false);

  /* ===========================
      INITIALIZE ENGINE
  =========================== */

  useEffect(() => {

    const canvas = canvasRef.current;

    const container = containerRef.current;

    if (!canvas || !container) return;

    const engine = new Engine(canvas);

    engine.initialize();

    engine.setTool(tool);
    engine.setColor(color);
    engine.setBrushSize(brushSize);

    engineRef.current = engine;

    SketchRegistry.setEngine(
      engine
      );

    if (onEngineReady) {
      onEngineReady(engine);
    }

    const input = new InputManager(
      canvas,
      engine
    );

    inputRef.current = input;

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

      input.destroy();

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
      CLEAR CANVAS
  =========================== */

  useEffect(() => {

    if (!engineRef.current) return;

    if (!hasMountedRef.current) {

      hasMountedRef.current = true;

      return;

    }

    engineRef.current.clear();

  }, [clearTrigger]);

  /* ===========================
      RENDER
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
