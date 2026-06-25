import "./CommandPalette.css";

import useCommandPalette from "../../../hooks/workspace/useCommandPalette";
import useCommandShortcuts from "../../../hooks/workspace/useCommandShortcuts";

import CommandItem from "./CommandItem";
import CommandCategory from "./CommandCategory";

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

    groupedCommands,

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

  let commandIndex = -1;

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

          {groupedCommands.length === 0 ? (

            <div className="no-results">

              No commands found

            </div>

          ) : (

            groupedCommands.map(group => (

              <div

                key={group.category}

                className="command-group"

              >

                <CommandCategory

                  title={group.category}

                />

                {group.commands.map(command => {

                  commandIndex++;

                  return (

                    <CommandItem

                      key={command.id}

                      command={command}

                      selected={

                        commandIndex ===

                        selectedIndex

                      }

                      onClick={() =>

                        execute(command)

                      }

                    />

                  );

                })}

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );

}
