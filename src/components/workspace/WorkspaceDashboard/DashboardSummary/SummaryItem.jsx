import "./SummaryItem.css";

export default function SummaryItem({

  icon,

  label,

  value,

}) {

  return (

    <div className="summary-item">

      <div className="summary-left">

        <span className="summary-icon">

          {icon}

        </span>

        <span className="summary-label">

          {label}

        </span>

      </div>

      <strong>

        {value}

      </strong>

    </div>

  );

}
