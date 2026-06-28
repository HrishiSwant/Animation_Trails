class CommandRegistry {

  constructor() {

    this.commands = [];

  }

  register(command) {

    if (

      !command ||

      !command.id ||

      !command.title ||

      typeof command.action !==
        "function"

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

    return [...this.commands];

  }

  get(id) {

    return this.commands.find(

      item =>

        item.id === id,

    );

  }

  search(query) {

    if (!query) {

      return this.getAll();

    }

    const value =
      query.toLowerCase();

    return this.commands.filter(

      command =>

        command.title
          .toLowerCase()
          .includes(value) ||

        command.category
          ?.toLowerCase()
          .includes(value),

    );

  }

}

const registry =
  new CommandRegistry();

export default registry;
