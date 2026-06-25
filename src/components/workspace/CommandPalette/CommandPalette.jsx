import "./CommandPalette.css";

import useCommandPalette from "../../../hooks/workspace/useCommandPalette";
import useCommandShortcuts from "../../../hooks/workspace/useCommandShortcuts";

import CommandItem from "./CommandItem";

export default function CommandPalette({

  visible,

  setVisible,

  onClose,

  onCommand,

}) {

  const {

    query,

    setQuery,

    commands,

    execute,

    selectedIndex,

    setSelectedIndex,

  } = useCommandPalette({

    onCommand,

    onClose,

  });

  useCommandShortcuts({

    visible,

    commands,

    execute,

    onClose,

    selectedIndex,

    setSelectedIndex,

    setVisible,

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

            commands.map(

              (command, index) => (

                <CommandItem

                  key={command.id}

                  command={command}

                  selected={

                    index ===

                    selectedIndex

                  }

                  onClick={() =>

                    execute(command)

                  }

                />

              )

            )

          )}

        </div>

      </div>

    </div>

  );

}
