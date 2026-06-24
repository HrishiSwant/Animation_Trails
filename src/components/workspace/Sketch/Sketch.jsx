import { useRef, useState } from "react";
import HistoryManager from "./HistoryManager";
import "./Sketch.css";

import Toolbar from "./Toolbar";
import Canvas from "./Canvas";

export default function Sketch() {

  const [tool, setTool] = useState("pencil");

  const [color, setColor] = useState("#ffffff");

  const [brushSize, setBrushSize] = useState(4);

  const [clearTrigger, setClearTrigger] = useState(0);

  // History Manager
  const history = useRef(new HistoryManager());

  function clearCanvas() {
    setClearTrigger((prev) => prev + 1);

    // Clear history when canvas is cleared
    history.current.clear();
  }

  // STEP 3 - Placeholder Undo
  function undo() {

    console.log("Undo");

  }

  // STEP 3 - Placeholder Redo
  function redo() {

    console.log("Redo");

  }

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
      />

    </div>
  );
}
