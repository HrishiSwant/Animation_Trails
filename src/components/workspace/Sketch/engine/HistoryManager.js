export default class HistoryManager {

    constructor(limit = 100) {

        this.limit = limit;

        this.undoStack = [];

        this.redoStack = [];

    }

    clone(strokes) {

        return structuredClone(strokes);

    }

    save(strokes) {

        const snapshot = this.clone(strokes);

        this.undoStack.push(snapshot);

        if (this.undoStack.length > this.limit) {

            this.undoStack.shift();

        }

        this.redoStack = [];

    }

    undo(currentStrokes) {

        if (!this.canUndo()) {

            return null;

        }

        this.redoStack.push(

            this.clone(currentStrokes)

        );

        return this.undoStack.pop();

    }

    redo(currentStrokes) {

        if (!this.canRedo()) {

            return null;

        }

        this.undoStack.push(

            this.clone(currentStrokes)

        );

        return this.redoStack.pop();

    }

    canUndo() {

        return this.undoStack.length > 0;

    }

    canRedo() {

        return this.redoStack.length > 0;

    }

    clear() {

        this.undoStack = [];

        this.redoStack = [];

    }

    getUndoCount() {

        return this.undoStack.length;

    }

    getRedoCount() {

        return this.redoStack.length;

    }

}
