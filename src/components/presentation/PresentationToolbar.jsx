import "./Presentation.css";

export default function PresentationToolbar({

  isFirst,

  isLast,

  isPlaying,

  isFullscreen,

  onPrevious,

  onNext,

  onRestart,

  onTogglePlay,

  onToggleFullscreen,

  onExit,

}) {

  return (

    <div className="presentation-toolbar">

      <button

        onClick={onPrevious}

        disabled={isFirst}

      >

        ◀ Previous

      </button>

      <button

        onClick={onNext}

        disabled={isLast}

      >

        Next ▶

      </button>

      <button

        onClick={onRestart}

      >

        ↺ Restart

      </button>

      <button

        onClick={onTogglePlay}

      >

        {

          isPlaying

            ? "⏸ Pause"

            : "▶ Play"

        }

      </button>

      <button

        onClick={onToggleFullscreen}

      >

        {

          isFullscreen

            ? "🗗 Window"

            : "⛶ Fullscreen"

        }

      </button>

      <button

        className="presentation-exit"

        onClick={onExit}

      >

        ✕ Exit

      </button>

    </div>

  );

}
