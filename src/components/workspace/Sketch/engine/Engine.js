import StrokeManager from "./StrokeManager";
import CanvasRenderer from "./CanvasRenderer";
import HistoryManager from "./HistoryManager";

import StorageManager from "../../../../core/storage/StorageManager";
import StorageKeys from "../../../../core/storage/StorageKeys";

export default class Engine {

    constructor(canvas) {

        this.canvas = canvas;

        this.strokeManager = new StrokeManager();

        this.renderer = null;

        this.history = new HistoryManager();

        this.tool = "pencil";

        this.color = "#ffffff";

        this.size = 4;

    }

    initialize() {

        this.renderer = new CanvasRenderer(this.canvas);

    }

    destroy() {

        this.strokeManager.clear();

        this.history.clear();

    }

    resize(width, height) {

        if (!this.renderer) return;

        this.renderer.resize(width, height);

        this.restore();

        this.render();

    }

    setTool(tool) {

        this.tool = tool;

    }

    setColor(color) {

        this.color = color;

    }

    setBrushSize(size) {

        this.size = size;

    }

    startStroke(point) {

        this.history.save(
            this.strokeManager.getStrokes()
        );

        this.strokeManager.startStroke(
            this.tool,
            this.color,
            this.size,
            point
        );

        this.render();

    }

    addPoint(point) {

        this.strokeManager.addPoint(point);

        this.render();

    }

    finishStroke() {

        this.strokeManager.finishStroke();

        this.save();

        this.render();

    }

    undo() {

        const previous = this.history.undo(
            this.strokeManager.getStrokes()
        );

        if (!previous) return;

        this.strokeManager.setStrokes(previous);

        this.save();

        this.render();

    }

    redo() {

        const next = this.history.redo(
            this.strokeManager.getStrokes()
        );

        if (!next) return;

        this.strokeManager.setStrokes(next);

        this.save();

        this.render();

    }

    clear() {

        this.history.save(
            this.strokeManager.getStrokes()
        );

        this.strokeManager.clear();

        this.save();

        this.render();

    }

    render() {

        if (!this.renderer) return;

        this.renderer.render(
            this.strokeManager.getStrokes(),
            this.strokeManager.getCurrentStroke()
        );

    }

    save() {

        StorageManager.save(
            StorageKeys.SKETCH,
            {
                strokes:
                    this.strokeManager.getStrokes()
            }
        );

    }

    restore() {

    const saved =
        StorageManager.load(
            StorageKeys.SKETCH
        );

    console.log("RESTORE DATA:", saved);

    if (!saved) return;

    if (!saved.strokes) return;

    console.log(
        "RESTORING",
        saved.strokes.length,
        "strokes"
    );

    this.strokeManager.setStrokes(
        saved.strokes
    );

}
    getStrokeCount() {

        return this.strokeManager.strokeCount();

    }
    getRenderer() {

    return this.renderer;

}

}
