export default class WorkspaceSearchEngine {

  static search(

    items,

    query

  ) {

    if (!query) {

      return [];

    }

    const search =
      query.toLowerCase();

    return items.filter(item => {

      const title =

        item.title ||

        item.name ||

        "";

      const content =

        item.content ||

        "";

      return (

        title

          .toLowerCase()

          .includes(search)

        ||

        content

          .toLowerCase()

          .includes(search)

      );

    });

  }

}
