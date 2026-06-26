import "./Presentation.css";

import PresentationRenderer from "./PresentationRenderer";

export default function PresentationSlide({

  slide,

}) {

  if (!slide) {

    return (

      <div className="presentation-slide">

        <h2>

          No Slide

        </h2>

      </div>

    );

  }

  return (

    <div className="presentation-slide">

      <div className="presentation-slide-icon">

        {slide.icon}

      </div>

      <h1 className="presentation-slide-title">

        {slide.title}

      </h1>

      <p className="presentation-slide-description">

        {slide.description}

      </p>

      <div className="presentation-preview">

    <PresentationRenderer

        tool={slide.tool}

    />

</div>

    </div>

  );

}
