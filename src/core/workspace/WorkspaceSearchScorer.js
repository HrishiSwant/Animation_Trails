export default class WorkspaceSearchScorer {

  /*
  ==========================
      CALCULATE SCORE
  ==========================
  */

  static score(item, query) {

    if (!query) {

      return 0;

    }

    const search =
      query.trim().toLowerCase();

    const title =
      (item.title || item.name || "")
        .toLowerCase();

    const content =
      (item.content || "")
        .toLowerCase();

    let score = 0;

    /*
    ==========================
        EXACT MATCH
    ==========================
    */

    if (title === search) {

      score += 1000;

    }

    /*
    ==========================
        STARTS WITH
    ==========================
    */

    else if (

      title.startsWith(search)

    ) {

      score += 750;

    }

    /*
    ==========================
        TITLE CONTAINS
    ==========================
    */

    else if (

      title.includes(search)

    ) {

      score += 500;

    }

    /*
    ==========================
        CONTENT CONTAINS
    ==========================
    */

    if (

      content.includes(search)

    ) {

      score += 250;

    }

    /*
    ==========================
        FUZZY BONUS
    ==========================
    */

    score += this.fuzzyScore(

      title,

      search

    );

    return score;

  }

  /*
  ==========================
      SIMPLE FUZZY SCORE
  ==========================
  */

  static fuzzyScore(

    text,

    query

  ) {

    let score = 0;

    let position = 0;

    for (

      const character of query

    ) {

      const found =

        text.indexOf(

          character,

          position

        );

      if (

        found === -1

      ) {

        return score;

      }

      score += 10;

      position = found + 1;

    }

    return score;

  }

}
