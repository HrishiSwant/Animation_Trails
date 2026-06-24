import StrokeManager from "./StrokeManager";
import CanvasRenderer from "./CanvasRenderer";
import HistoryManager from "./HistoryManager";

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

    /* ===========================
       ENGINE
    =========================== */

    initialize() {

        this.renderer = new CanvasRenderer(this.canvas);

        this.render();

    }

    destroy() {

        this.strokeManager.clear();

        this.history.clear();

    }

    resize(width, height) {

        if (!this.renderer) return;

        this.renderer.resize(width, height);

        this.render();

    }

    /* ===========================
       SETTINGS
    =========================== */

    setTool(tool) {

        this.tool = tool;

    }

    setColor(color) {

        this.color = color;

    }

    setBrushSize(size) {

        this.size = size;

    }

    /* ===========================
       DRAWING
    =========================== */

    startStroke(point) {

        // Save the canvas BEFORE adding a new stroke
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

        this.render();

    }

    /* ===========================
       HISTORY
    =========================== */

    undo() {

        const previous = this.history.undo(
            this.strokeManager.getStrokes()
        );

        if (!previous) return;

        this.strokeManager.setStrokes(previous);

        this.render();

    }

    redo() {

        const next = this.history.redo(
            this.strokeManager.getStrokes()
        );

        if (!next) return;

        this.strokeManager.setStrokes(next);

        this.render();

    }

    /* ===========================
       CANVAS
    =========================== */

    clear() {

        this.history.save(
            this.strokeManager.getStrokes()
        );

        this.strokeManager.clear();

        this.render();

    }

    render() {

        if (!this.renderer) return;

        this.renderer.render(

            this.strokeManager.getStrokes(),

            this.strokeManager.getCurrentStroke()

        );

    }

    /* ===========================
       GETTERS
    =========================== */

    getStrokeCount() {

        return this.strokeManager.strokeCount();

    }

}
