export default class HistoryManager {

  constructor(limit = 50) {

    this.limit = limit;

    this.undoStack = [];

    this.redoStack = [];

  }

  save(snapshot) {

    this.undoStack.push(snapshot);

    if (this.undoStack.length > this.limit) {
      this.undoStack.shift();
    }

    this.redoStack = [];

  }

  undo(currentSnapshot) {

    if (this.undoStack.length === 0) {
      return null;
    }

    this.redoStack.push(currentSnapshot);

    return this.undoStack.pop();

  }

  redo(currentSnapshot) {

    if (this.redoStack.length === 0) {
      return null;
    }

    this.undoStack.push(currentSnapshot);

    return this.redoStack.pop();

  }

  clear() {

    this.undoStack = [];

    this.redoStack = [];

  }

}
