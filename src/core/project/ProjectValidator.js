import ProjectStore from "./ProjectStore";

class ProjectValidator {

  /*
  ==========================
      VALIDATE
  ==========================
  */

  validate(form) {

    const errors = {};

    /*
    ==========================
        NAME
    ==========================
    */

    const name =

      form.name.trim();

    if (!name) {

      errors.name =

        "Project name is required.";

    }

    else if (

      name.length < 3

    ) {

      errors.name =

        "Project name must be at least 3 characters.";

    }

    else if (

      name.length > 60

    ) {

      errors.name =

        "Project name cannot exceed 60 characters.";

    }

    /*
    ==========================
        DESCRIPTION
    ==========================
    */

    if (

      form.description.length >

      500

    ) {

      errors.description =

        "Description is too long.";

    }

    /*
    ==========================
        TAGS
    ==========================
    */

    if (

      form.tags.length >

      10

    ) {

      errors.tags =

        "Maximum 10 tags allowed.";

    }

    form.tags.forEach(tag => {

      if (

        tag.length > 20

      ) {

        errors.tags =

          "Each tag must be under 20 characters.";

      }

    });

    /*
    ==========================
        DUPLICATE NAME
    ==========================
    */

    const exists =

      ProjectStore
        .getProjects()
        .some(

          project =>

            project.name
              .trim()
              .toLowerCase() ===

            name.toLowerCase(),

        );

    if (exists) {

      errors.name =

        "A project with this name already exists.";

    }

    return {

      valid:

        Object.keys(errors)
          .length === 0,

      errors,

    };

  }

}

export default new ProjectValidator();
