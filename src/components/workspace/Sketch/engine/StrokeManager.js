export default class StrokeManager {

    constructor() {

        this.strokes = [];

        this.currentStroke = null;

    }

    startStroke(tool, color, size, point) {

        this.currentStroke = {

            id: Date.now(),

            tool,

            color,

            size,

            points: [point],

        };

    }

    addPoint(point) {

        if (!this.currentStroke) return;

        this.currentStroke.points.push(point);

    }

    finishStroke() {

        if (!this.currentStroke) return;

        if (this.currentStroke.points.length > 1) {

            this.strokes.push(this.currentStroke);

        }

        this.currentStroke = null;

    }

    getCurrentStroke() {

        return this.currentStroke;

    }

    getStrokes() {

        return this.strokes;

    }

    setStrokes(strokes) {

        this.strokes = [...strokes];

    }

    clear() {

        this.strokes = [];

        this.currentStroke = null;

    }

    removeLastStroke() {

        if (this.strokes.length === 0) return null;

        return this.strokes.pop();

    }

    addStroke(stroke) {

        if (!stroke) return;

        this.strokes.push(stroke);

    }

    strokeCount() {

        return this.strokes.length;

    }

}
