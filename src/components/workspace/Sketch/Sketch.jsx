import { useRef, useState } from "react";
import "./Sketch.css";

import Toolbar from "./Toolbar";
import Canvas from "./Canvas";

export default function Sketch() {

  /* ===========================
      ENGINE
  =========================== */

  const engineRef = useRef(null);

  /* ===========================
      DRAWING SETTINGS
  =========================== */

  const [tool, setTool] = useState("pencil");

  const [color, setColor] = useState("#ffffff");

  const [brushSize, setBrushSize] = useState(4);

  const [clearTrigger, setClearTrigger] = useState(0);

  /* ===========================
      ENGINE READY
  =========================== */

  function handleEngineReady(engine) {

    engineRef.current = engine;

  }

  /* ===========================
      ACTIONS
  =========================== */

  function clearCanvas() {

    setClearTrigger(prev => prev + 1);

  }

  function undo() {

    if (!engineRef.current) return;

    engineRef.current.undo();

  }

  function redo() {

    if (!engineRef.current) return;

    engineRef.current.redo();

  }

  /* ===========================
      UI
  =========================== */

  return (

    <div className="sketch">

      <Toolbar
        tool={tool}
        setTool={setTool}
        color={color}
        setColor={setColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        clearCanvas={clearCanvas}
        undo={undo}
        redo={redo}
      />

      <Canvas
        tool={tool}
        color={color}
        brushSize={brushSize}
        clearTrigger={clearTrigger}
        onEngineReady={handleEngineReady}
      />

    </div>

  );

}
