import {

  useEffect,

  useMemo,

  useState,

} from "react";

import CommandRegistry from "../../core/workspace/CommandRegistry";
import CommandCategories from "../../core/workspace/CommandCategories";

export default function useCommandPalette({

  onCommand,

  onClose,

}) {

  const [query, setQuery] =
    useState("");

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  /*
  ==========================
      FILTERED COMMANDS
  ==========================
  */

  const commands =
    useMemo(() => {

      const search =
        query.toLowerCase();

      return CommandRegistry.filter(

        command =>

          command.title

            .toLowerCase()

            .includes(search) ||

          command.category

            .toLowerCase()

            .includes(search)

      );

    }, [

      query,

    ]);

  /*
  ==========================
      GROUPED COMMANDS
  ==========================
  */

  const groupedCommands =
    useMemo(() => {

      return CommandCategories.map(

        category => ({

          category,

          commands:

            commands.filter(

              command =>

                command.category ===

                category

            ),

        })

      ).filter(

        group =>

          group.commands.length > 0

      );

    }, [

      commands,

    ]);

  /*
  ==========================
      RESET SELECTION
  ==========================
  */

  useEffect(() => {

    setSelectedIndex(0);

  }, [

    query,

  ]);

  /*
  ==========================
      EXECUTE
  ==========================
  */

  function execute(command) {

    if (!command) {

      return;

    }

    onCommand(

      command.action

    );

    setQuery("");

    setSelectedIndex(0);

    onClose();

  }

  /*
  ==========================
      CLEAR SEARCH
  ==========================
  */

  function clearSearch() {

    setQuery("");

    setSelectedIndex(0);

  }

  return {

    query,

    setQuery,

    commands,

    groupedCommands,

    execute,

    clearSearch,

    selectedIndex,

    setSelectedIndex,

  };

}
