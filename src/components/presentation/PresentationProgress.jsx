import "./Presentation.css";

export default function PresentationProgress({

  current,

  total,

  title,

}) {

  const percentage =

    total === 0

      ? 0

      : Math.round(

          (current / total) * 100

        );

  return (

    <div className="presentation-progress">

      <div className="presentation-progress-header">

        <div>

          <strong>

            {title}

          </strong>

        </div>

        <div>

          {current} / {total}

        </div>

      </div>

      <div className="presentation-progress-bar">

        <div

          className="presentation-progress-fill"

          style={{

            width:

              `${percentage}%`

          }}

        />

      </div>

      <div className="presentation-progress-footer">

        {percentage}% Completed

      </div>

    </div>

  );

}
