import { useMemo, useState } from "react";

import "./CommandPalette.css";

import CommandManager from "../../core/command/CommandManager";

import CommandItem from "./CommandItem";

export default function CommandPalette({

  open,

  onClose,

}) {

  const [

    search,

    setSearch,

  ] = useState("");

  const [

    active,

    setActive,

  ] = useState(0);

  const commands = useMemo(

    () =>

      CommandManager.search(

        search,

      ),

    [search],

  );

  if (!open) {

    return null;

  }

  return (

    <div

      className="command-overlay"

      onClick={onClose}

    >

      <div

        className="command-palette"

        onClick={e =>

          e.stopPropagation()

        }

      >

        <input

          autoFocus

          type="text"

          placeholder="Search commands..."

          value={search}

          onChange={e => {

            setSearch(

              e.target.value

            );

            setActive(0);

          }}

        />

        <div className="command-results">

          {

            commands.length === 0 && (

              <div className="command-empty">

                No commands found.

              </div>

            )

          }

          {

            commands.map(

              (

                command,

                index,

              ) => (

                <CommandItem

                  key={command.id}

                  command={command}

                  active={

                    active === index

                  }

                  onClick={() => {

                    CommandManager.execute(

                      command.id

                    );

                    onClose();

                  }}

                />

              )

            )

          }

        </div>

      </div>

    </div>

  );

}
