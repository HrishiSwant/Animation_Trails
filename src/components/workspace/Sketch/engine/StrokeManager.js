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

        return structuredClone(this.strokes);

    }

    setStrokes(strokes) {

        this.strokes = structuredClone(strokes);

        this.currentStroke = null;

    }

    clear() {

        this.strokes = [];

        this.currentStroke = null;

    }

    strokeCount() {

        return this.strokes.length;

    }

}
