import useSlides from "./useSlides";
import useFullscreen from "./useFullscreen";
import useKeyboard from "./useKeyboard";
import useAutoPlay from "./useAutoPlay";

export default function usePresentation() {

  /*
  ==========================
      SLIDES
  ==========================
  */

  const slides =
    useSlides();

  /*
  ==========================
      FULLSCREEN
  ==========================
  */

  const fullscreen =
    useFullscreen();

  /*
  ==========================
      AUTOPLAY
  ==========================
  */

  const autoPlay =
    useAutoPlay({

      next:
        slides.next,

    });

  /*
  ==========================
      KEYBOARD
  ==========================
  */

  useKeyboard({

    enabled: true,

    next:
      slides.next,

    previous:
      slides.previous,

    restart:
      slides.restart,

    finish:
      slides.finish,

    jumpTo:
      slides.jumpTo,

    total:
      slides.total,

    toggleFullscreen:
      fullscreen.toggle,

  });

  /*
  ==========================
      RETURN
  ==========================
  */

  return {

    /*
    Slides
    */

    slides:
      slides.slides,

    current:
      slides.current,

    currentSlide:
      slides.currentSlide,

    total:
      slides.total,

    isFirst:
      slides.isFirst,

    isLast:
      slides.isLast,

    next:
      slides.next,

    previous:
      slides.previous,

    jumpTo:
      slides.jumpTo,

    restart:
      slides.restart,

    finish:
      slides.finish,

    /*
    Fullscreen
    */

    isFullscreen:
      fullscreen.isFullscreen,

    enterFullscreen:
      fullscreen.enter,

    exitFullscreen:
      fullscreen.exit,

    toggleFullscreen:
      fullscreen.toggle,

    /*
    Auto Play
    */

    isPlaying:
      autoPlay.isPlaying,

    interval:
      autoPlay.interval,

    start:
      autoPlay.start,

    pause:
      autoPlay.pause,

    resume:
      autoPlay.resume,

    stop:
      autoPlay.stop,

    togglePlay:
      autoPlay.toggle,

    setSpeed:
      autoPlay.setSpeed,

  };

}
