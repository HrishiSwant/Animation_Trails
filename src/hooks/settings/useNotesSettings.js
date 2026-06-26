import useSettings from "./useSettings";

export default function useNotesSettings() {

  const settings =
    useSettings();

  const notes =
    settings.settings.notes;

  function update(

    key,

    value,

  ) {

    settings.updateValue(

      "notes",

      key,

      value,

    );

  }

  function setAutosave(value) {

    update(

      "autosave",

      value,

    );

  }

  function setSpellCheck(value) {

    update(

      "spellCheck",

      value,

    );

  }

  function setWordWrap(value) {

    update(

      "wordWrap",

      value,

    );

  }

  function setDefaultSort(value) {

    update(

      "defaultSort",

      value,

    );

  }

  return {

    notes,

    autosave:
      notes.autosave,

    spellCheck:
      notes.spellCheck,

    wordWrap:
      notes.wordWrap,

    defaultSort:
      notes.defaultSort,

    update,

    setAutosave,

    setSpellCheck,

    setWordWrap,

    setDefaultSort,

  };

}
