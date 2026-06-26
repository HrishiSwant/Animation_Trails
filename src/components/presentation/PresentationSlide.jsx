import "./Presentation.css";

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

        <h3>

          Live Preview

        </h3>

        <p>

          Presentation preview for

          {" "}

          <strong>

            {slide.title}

          </strong>

          {" "}

          will appear here.

        </p>

      </div>

    </div>

  );

}
