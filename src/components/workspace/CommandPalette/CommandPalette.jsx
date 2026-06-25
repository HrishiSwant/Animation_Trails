import "./CommandPalette.css";

import useCommandPalette from "../../../hooks/workspace/useCommandPalette";

import CommandItem from "./CommandItem";

export default function CommandPalette({

  visible,

  onClose,

  onCommand,

}) {

  const {

    query,

    setQuery,

    commands,

    execute,

  } = useCommandPalette({

    onCommand,

    onClose,

  });

  if (!visible) {

    return null;

  }

  return (

    <div

      className="command-overlay"

      onClick={onClose}

    >

      <div

        className="command-palette"

        onClick={(e) =>

          e.stopPropagation()

        }

      >

        <input

          autoFocus

          placeholder="Search commands..."

          value={query}

          onChange={(e) =>

            setQuery(

              e.target.value

            )

          }

        />

        <div className="command-results">

          {commands.length === 0 ? (

            <div className="no-results">

              No commands found

            </div>

          ) : (

            commands.map(command => (

              <CommandItem

                key={command.id}

                command={command}

                selected={false}

                onClick={() =>

                  execute(command)

                }

              />

            ))

          )}

        </div>

      </div>

    </div>

  );

}
