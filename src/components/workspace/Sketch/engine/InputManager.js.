export default class InputManager {

    constructor(canvas, engine) {

        this.canvas = canvas;

        this.engine = engine;

        this.isDrawing = false;

        this.bindEvents();

    }

    bindEvents() {

        /* Mouse */

        this.canvas.addEventListener(
            "mousedown",
            this.handleMouseDown
        );

        this.canvas.addEventListener(
            "mousemove",
            this.handleMouseMove
        );

        window.addEventListener(
            "mouseup",
            this.handleMouseUp
        );

        /* Touch */

        this.canvas.addEventListener(
            "touchstart",
            this.handleTouchStart,
            { passive: false }
        );

        this.canvas.addEventListener(
            "touchmove",
            this.handleTouchMove,
            { passive: false }
        );

        window.addEventListener(
            "touchend",
            this.handleTouchEnd
        );

    }

    destroy() {

        this.canvas.removeEventListener(
            "mousedown",
            this.handleMouseDown
        );

        this.canvas.removeEventListener(
            "mousemove",
            this.handleMouseMove
        );

        window.removeEventListener(
            "mouseup",
            this.handleMouseUp
        );

        this.canvas.removeEventListener(
            "touchstart",
            this.handleTouchStart
        );

        this.canvas.removeEventListener(
            "touchmove",
            this.handleTouchMove
        );

        window.removeEventListener(
            "touchend",
            this.handleTouchEnd
        );

    }

    getPoint(clientX, clientY) {

        const rect =
            this.canvas.getBoundingClientRect();

        return {

            x: clientX - rect.left,

            y: clientY - rect.top,

        };

    }

    /* --------------------
       Mouse
    -------------------- */

    handleMouseDown = (event) => {

        this.isDrawing = true;

        this.engine.startStroke(

            this.getPoint(

                event.clientX,

                event.clientY

            )

        );

    }

    handleMouseMove = (event) => {

        if (!this.isDrawing) return;

        this.engine.addPoint(

            this.getPoint(

                event.clientX,

                event.clientY

            )

        );

    }

    handleMouseUp = () => {

        if (!this.isDrawing) return;

        this.isDrawing = false;

        this.engine.finishStroke();

    }

    /* --------------------
       Touch
    -------------------- */

    handleTouchStart = (event) => {

        event.preventDefault();

        this.isDrawing = true;

        const touch = event.touches[0];

        this.engine.startStroke(

            this.getPoint(

                touch.clientX,

                touch.clientY

            )

        );

    }

    handleTouchMove = (event) => {

        event.preventDefault();

        if (!this.isDrawing) return;

        const touch = event.touches[0];

        this.engine.addPoint(

            this.getPoint(

                touch.clientX,

                touch.clientY

            )

        );

    }

    handleTouchEnd = () => {

        if (!this.isDrawing) return;

        this.isDrawing = false;

        this.engine.finishStroke();

    }

}
