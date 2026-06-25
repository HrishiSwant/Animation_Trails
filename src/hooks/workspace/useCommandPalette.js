import {

  useEffect,

  useMemo,

  useState,

} from "react";

import CommandRegistry from "../../core/workspace/CommandRegistry";
import CommandCategories from "../../core/workspace/CommandCategories";

import useRecentCommands from "./useRecentCommands";

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
      RECENT COMMANDS
  ==========================
  */

  const {

    recentCommands,

    addRecent,

    clearRecent,

  } = useRecentCommands();

  /*
  ==========================
      FILTERED COMMANDS
  ==========================
  */

  const commands =
    useMemo(() => {

      const search =
        query.trim().toLowerCase();

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
      EXECUTE COMMAND
  ==========================
  */

  function execute(command) {

    if (!command) {

      return;

    }

    addRecent(command);

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

    recentCommands,

    clearRecent,

  };

}
