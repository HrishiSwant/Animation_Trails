import StrokeManager from "./StrokeManager";
import CanvasRenderer from "./CanvasRenderer";
import HistoryManager from "./HistoryManager";

export default class Engine {

    constructor(canvas){

        this.canvas = canvas;

        this.strokeManager = new StrokeManager();

        this.renderer = new CanvasRenderer(canvas);

        this.history = new HistoryManager();

        this.tool = "pencil";

        this.color = "#ffffff";

        this.size = 4;

    }

    setTool(tool){

        this.tool = tool;

    }

    setColor(color){

        this.color = color;

    }

    setBrushSize(size){

        this.size = size;

    }

}
startStroke(point){

    this.strokeManager.startStroke(

        this.tool,

        this.color,

        this.size,

        point

    );

}
addPoint(point){

    this.strokeManager.addPoint(point);

    this.render();

}
finishStroke(){

    this.strokeManager.finishStroke();

    this.render();

}
render(){

    this.renderer.render(

        this.strokeManager.getStrokes(),

        this.strokeManager.getCurrentStroke()

    );

}
clear(){

    this.strokeManager.clear();

    this.render();

}
