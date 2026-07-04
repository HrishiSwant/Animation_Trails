import "./ScoreCheck.css";

export default function ScoreCheck({

  passed,

  label,

}) {

  return (

    <div className="score-check">

      <span

        className={

          passed

            ? "score-check-pass"

            : "score-check-fail"

        }

      >

        {

          passed

            ? "✔"

            : "✖"

        }

      </span>

      <span>

        {label}

      </span>

    </div>

  );

}
