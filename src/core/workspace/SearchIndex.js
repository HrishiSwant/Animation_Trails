export default class SearchIndex {

  static create() {

    return [];

  }

  static add(

    index,

    entries

  ) {

    if (

      Array.isArray(entries)

    ) {

      index.push(

        ...entries

      );

    }

    return index;

  }

}
