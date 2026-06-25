import "./CommandItem.css";

export default function CommandItem({

  command,

  selected,

  onClick,

}) {

  return (

    <div

      className={

        selected

          ? "command-item selected"

          : "command-item"

      }

      onClick={onClick}

    >

      <div className="command-icon">

        {command.icon}

      </div>

      <div className="command-details">

        <h4>

          {command.title}

        </h4>

        <span>

          {command.category}

        </span>

      </div>

    </div>

  );

}
