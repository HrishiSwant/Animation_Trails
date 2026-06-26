import "./Presentation.css";

import usePresentation from "../../hooks/presentation/usePresentation";

import PresentationSlide from "./PresentationSlide";
import PresentationToolbar from "./PresentationToolbar";
import PresentationProgress from "./PresentationProgress";
import PresentationOverlay from "./PresentationOverlay";

export default function PresentationMode({

  onExit,

}) {

  const presentation =
    usePresentation();

  function handleExit() {

    presentation.stop();

    presentation.exitFullscreen();

    presentation.finish();

    onExit?.();

  }

  if (

    presentation.currentSlide === -1

  ) {

    return null;

  }

  return (

    <div className="presentation-mode">

      <PresentationOverlay />

      <PresentationSlide

        slide={presentation.current}

      />

      <PresentationProgress

        current={

          presentation.currentSlide + 1

        }

        total={presentation.total}

        title={

          presentation.current?.title

          }

      />

      <PresentationToolbar

        isFirst={presentation.isFirst}

        isLast={presentation.isLast}

        isPlaying={presentation.isPlaying}

        isFullscreen={

          presentation.isFullscreen

        }

        onPrevious={

          presentation.previous

        }

        onNext={

          presentation.next

        }

        onRestart={

          presentation.restart

        }

        onTogglePlay={

          presentation.togglePlay

        }

        onToggleFullscreen={

          presentation.toggleFullscreen

        }

        onExit={handleExit}

      />

    </div>

  );

}
