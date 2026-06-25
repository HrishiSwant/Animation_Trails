import { useMemo, useState } from "react";

import CommandRegistry from "../../core/workspace/CommandRegistry";

export default function useCommandPalette({

  onCommand,

  onClose,

}) {

  const [query, setQuery] =
    useState("");

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

  function execute(command) {

    onCommand(

      command.action

    );

    setQuery("");

    onClose();

  }

  function clearSearch() {

    setQuery("");

  }

  return {

    query,

    setQuery,

    commands,

    execute,

    clearSearch,

  };

}
