import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

  const listRef =
    useRef(null);

  const itemRefs =
    useRef([]);

  const commands = useMemo(

    () =>

      CommandManager.search(

        search,

      ),

    [search],

  );

  /*
  ==========================
      RESET WHEN OPENING
  ==========================
  */

  useEffect(() => {

    if (open) {

      setActive(0);

      setSearch("");

    }

  }, [open]);

  /*
  ==========================
      AUTO SCROLL
  ==========================
  */

  useEffect(() => {

    const element =

      itemRefs.current[
        active
      ];

    if (element) {

      element.scrollIntoView({

        block: "nearest",

        behavior: "smooth",

      });

    }

  }, [

    active,

  ]);

  /*
  ==========================
      KEYBOARD
  ==========================
  */

  function handleKeyDown(
    event,
  ) {

    if (

      commands.length === 0

    ) {

      if (

        event.key === "Escape"

      ) {

        onClose();

      }

      return;

    }

    switch (

      event.key

    ) {

      case "ArrowDown":

        event.preventDefault();

        setActive(

          value =>

            Math.min(

              value + 1,

              commands.length - 1,

            ),

        );

        break;

      case "ArrowUp":

        event.preventDefault();

        setActive(

          value =>

            Math.max(

              value - 1,

              0,

            ),

        );

        break;

      case "Home":

        event.preventDefault();

        setActive(0);

        break;

      case "End":

        event.preventDefault();

        setActive(

          commands.length - 1,

        );

        break;

      case "Enter":

        event.preventDefault();

        CommandManager.execute(

          commands[
            active
          ].id,

        );

        onClose();

        break;

      case "Escape":

        event.preventDefault();

        onClose();

        break;

      default:

        break;

    }

  }

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

          onKeyDown={
            handleKeyDown
          }

          onChange={e => {

            setSearch(

              e.target.value,

            );

            setActive(0);

          }}

        />

        <div

          ref={listRef}

          className="command-results"

        >

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

                <div

                  key={command.id}

                  ref={element =>

                    itemRefs.current[
                      index
                    ] = element

                  }

                >

                  <CommandItem

                    command={command}

                    active={

                      active === index

                    }

                    onClick={() => {

                      CommandManager.execute(

                        command.id,

                      );

                      onClose();

                    }}

                  />

                </div>

              ),

            )

          }

        </div>

      </div>

    </div>

  );

}
