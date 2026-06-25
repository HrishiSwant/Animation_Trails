import {

  useEffect,

  useMemo,

  useState,

} from "react";

import CommandRegistry from "../../core/workspace/CommandRegistry";

export default function useCommandPalette({

  onCommand,

  onClose,

}) {

  const [query, setQuery] =
    useState("");

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const commands =
    useMemo(() => {

      return CommandRegistry.filter(

        command =>

          command.title

            .toLowerCase()

            .includes(

              query.toLowerCase()

            ) ||

          command.category

            .toLowerCase()

            .includes(

              query.toLowerCase()

            )

      );

    }, [

      query,

    ]);

  useEffect(() => {

    setSelectedIndex(0);

  }, [

    query,

  ]);

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

  function clearSearch() {

    setQuery("");

    setSelectedIndex(0);

  }

  return {

    query,

    setQuery,

    commands,

    execute,

    clearSearch,

    selectedIndex,

    setSelectedIndex,

  };

}
