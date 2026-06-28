class CommandRegistry {

  constructor() {

    this.commands = [];

  }

  register(command) {

    if (

      !command ||

      !command.id ||

      !command.title ||

      typeof command.action !== "function"

    ) {

      return;

    }

    const exists =

      this.commands.some(

        item =>

          item.id === command.id,

      );

    if (exists) {

      return;

    }

    this.commands.push(command);

  }

  unregister(id) {

    this.commands =

      this.commands.filter(

        item =>

          item.id !== id,

      );

  }

  getAll() {

    return [

      ...this.commands,

    ];

  }

  get(id) {

    return this.commands.find(

      item =>

        item.id === id,

    );

  }

  /*
  ==========================
      SEARCH
  ==========================
  */

  search(query) {

    if (!query) {

      return this.getAll();

    }

    const value =

      query
        .toLowerCase()
        .trim();

    return this.commands

      .map(command => {

        const title =

          command.title
            .toLowerCase();

        const category =

          (
            command.category ||

            ""

          ).toLowerCase();

        let score = 0;

        /*
        ==========================
            EXACT MATCH
        ==========================
        */

        if (

          title === value

        ) {

          score += 1000;

        }

        /*
        ==========================
            STARTS WITH
        ==========================
        */

        if (

          title.startsWith(

            value,

          )

        ) {

          score += 500;

        }

        /*
        ==========================
            CONTAINS
        ==========================
        */

        if (

          title.includes(

            value,

          )

        ) {

          score += 250;

        }

        /*
        ==========================
            CATEGORY MATCH
        ==========================
        */

        if (

          category.includes(

            value,

          )

        ) {

          score += 120;

        }

        /*
        ==========================
            FUZZY MATCH
        ==========================
        */

        let position = 0;

        let matched = 0;

        for (

          const character of value

        ) {

          const found =

            title.indexOf(

              character,

              position,

            );

          if (

            found === -1

          ) {

            matched = -999;

            break;

          }

          matched += 25;

          position =

            found + 1;

        }

        score += matched;

        return {

          command,

          score,

        };

      })

      .filter(

        item =>

          item.score > 0,

      )

      .sort(

        (a, b) =>

          b.score -

          a.score,

      )

      .map(

        item =>

          item.command,

      );

  }

}

const registry =

  new CommandRegistry();

export default registry;
