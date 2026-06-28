import CommandRegistry from "./CommandRegistry";
import CommandStorage from "./CommandStorage";

class CommandManager {

  constructor() {

    this.listeners = [];

    this.recent =
      CommandStorage.load();

  }

  /*
  ==========================
      COMMANDS
  ==========================
  */

  register(command) {

    CommandRegistry.register(

      command,

    );

  }

  unregister(id) {

    CommandRegistry.unregister(

      id,

    );

  }

  getCommands() {

    return CommandRegistry.getAll();

  }

  search(query) {

    return CommandRegistry.search(

      query,

    );

  }

  /*
  ==========================
      EXECUTE
  ==========================
  */

execute(id) {

  const command =

    CommandRegistry.get(id);

  if (!command) {

    return false;

  }

  try {

    command.action();

  } catch (error) {

    console.error(

      "Command failed:",

      error,

    );

    return false;

  }

  this.addRecent(id);

  this.notify();

  return true;

}
  /*
  ==========================
      RECENT
  ==========================
  */

  addRecent(id) {

    this.recent = [

      id,

      ...this.recent.filter(

        item =>

          item !== id,

      ),

    ].slice(0, 8);

    CommandStorage.save(

      this.recent,

    );

  }

  getRecent() {

    return this.recent
      .map(id =>

        CommandRegistry.get(id),

      )
      .filter(Boolean);

  }

  clearRecent() {

    this.recent = [];

    CommandStorage.clear();

    this.notify();

  }

  /*
  ==========================
      EVENTS
  ==========================
  */

  subscribe(listener) {

    this.listeners.push(

      listener,

    );

    return () => {

      this.listeners =
        this.listeners.filter(

          item =>

            item !== listener,

        );

    };

  }

  notify() {

    this.listeners.forEach(

      listener =>

        listener({

          commands:
            this.getCommands(),

          recent:
            this.getRecent(),

        }),

    );

  }

}

const manager =
  new CommandManager();

export default manager;
