import "./CommandItem.css";

export default function CommandItem({

  command,

  active,

  onClick,

}) {

  return (

    <button

      className={

        `command-item ${

          active

            ? "active"

            : ""

        }`

      }

      onClick={onClick}

    >

      <div className="command-info">

        <h4>

          {command.title}

        </h4>

        {

          command.description && (

            <p>

              {command.description}

            </p>

          )

        }

      </div>

      <span className="command-category">

        {command.category}

      </span>

    </button>

  );

}
