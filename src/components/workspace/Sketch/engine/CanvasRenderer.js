export default class CanvasRenderer {

    constructor(canvas){

        this.canvas = canvas;

        this.ctx = canvas.getContext("2d");

        this.ctx.lineCap = "round";

        this.ctx.lineJoin = "round";

    }

    clear(){

        this.ctx.clearRect(

            0,

            0,

            this.canvas.width,

            this.canvas.height

        );

    }

    render(strokes,currentStroke){

        this.clear();

        strokes.forEach(stroke=>{

            this.drawStroke(stroke);

        });

        if(currentStroke){

            this.drawStroke(currentStroke);

        }

    }

    drawStroke(stroke){

        if(!stroke) return;

        if(stroke.points.length<2) return;

        const ctx=this.ctx;

        ctx.beginPath();

        ctx.lineWidth=stroke.size;

        ctx.strokeStyle=

            stroke.tool==="eraser"

                ? "#0E0E0E"

                : stroke.color;

        ctx.moveTo(

            stroke.points[0].x,

            stroke.points[0].y

        );

        for(let i=1;i<stroke.points.length;i++){

            ctx.lineTo(

                stroke.points[i].x,

                stroke.points[i].y

            );

        }

        ctx.stroke();

    }

    resize(width,height){

        this.canvas.width=width;

        this.canvas.height=height;

        this.ctx = this.canvas.getContext("2d");

        this.ctx.lineCap = "round";

        this.ctx.lineJoin = "round";

    }

    exportPNG(){

        return this.canvas.toDataURL("image/png");

    }

}
