export default class CommandSearchEngine {

  /*
  ==========================
      SCORE COMMAND
  ==========================
  */

  static score(command, query) {

    if (!query) {

      return 100;

    }

    const search =
      query.toLowerCase();

    const title =
      command.title.toLowerCase();

    const category =
      command.category.toLowerCase();

    let score = 0;

    /*
    --------------------------
    Exact Match
    --------------------------
    */

    if (

      title === search

    ) {

      score += 1000;

    }

    /*
    --------------------------
    Starts With
    --------------------------
    */

    if (

      title.startsWith(search)

    ) {

      score += 500;

    }

    /*
    --------------------------
    Includes
    --------------------------
    */

    if (

      title.includes(search)

    ) {

      score += 300;

    }

    /*
    --------------------------
    Category Match
    --------------------------
    */

    if (

      category.includes(search)

    ) {

      score += 100;

    }

    /*
    --------------------------
    Acronym Match

    "os"

    Open Sketch
    --------------------------
    */

    const acronym =
      title

        .split(" ")

        .map(word =>

          word[0]

        )

        .join("");

    if (

      acronym.startsWith(search)

    ) {

      score += 250;

    }

    /*
    --------------------------
    Character Sequence

    nt

    Notes
    --------------------------
    */

    let index = 0;

    for (

      const character of search

    ) {

      index = title.indexOf(

        character,

        index

      );

      if (

        index === -1

      ) {

        return score;

      }

      score += 20;

      index++;

    }

    return score;

  }

  /*
  ==========================
      SEARCH
  ==========================
  */

  static search(

    commands,

    query

  ) {

    return commands

      .map(command => ({

        command,

        score:

          this.score(

            command,

            query

          ),

      }))

      .filter(item =>

        item.score > 0

      )

      .sort(

        (a, b) =>

          b.score -

          a.score

      )

      .map(

        item =>

          item.command

      );

  }

}
