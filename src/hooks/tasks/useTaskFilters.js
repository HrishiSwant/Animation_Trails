import { useMemo, useState } from "react";

export default function useTaskFilters(tasks) {

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [priority, setPriority] =
    useState("all");

  const [status, setStatus] =
    useState("all");

  const [sort, setSort] =
    useState("newest");

  const filteredTasks =
    useMemo(() => {

      let result = [...tasks];

      /*
      ==========================
          Search
      ==========================
      */

      if (search.trim()) {

        const query =
          search.toLowerCase();

        result = result.filter(task =>

          task.title
            .toLowerCase()
            .includes(query) ||

          task.description
            .toLowerCase()
            .includes(query)

        );

      }

      /*
      ==========================
          Category
      ==========================
      */

      if (category !== "all") {

        result = result.filter(

          task =>

            task.category ===
            category

        );

      }

      /*
      ==========================
          Priority
      ==========================
      */

      if (priority !== "all") {

        result = result.filter(

          task =>

            task.priority ===
            priority

        );

      }

      /*
      ==========================
          Status
      ==========================
      */

      if (status === "completed") {

        result = result.filter(

          task => task.completed

        );

      }

      if (status === "pending") {

        result = result.filter(

          task => !task.completed

        );

      }

      if (status === "favorites") {

        result = result.filter(

          task => task.favorite

        );

      }

      if (status === "pinned") {

        result = result.filter(

          task => task.pinned

        );

      }

      /*
      ==========================
          Sorting
      ==========================
      */

      switch (sort) {

        case "oldest":

          result.sort(

            (a, b) =>

              new Date(
                a.createdAt
              ) -

              new Date(
                b.createdAt
              )

          );

          break;

        case "priority":

          {

            const order = {

              high: 3,

              medium: 2,

              low: 1,

            };

            result.sort(

              (a, b) =>

                order[b.priority] -

                order[a.priority]

            );

          }

          break;

        case "alphabetical":

          result.sort(

            (a, b) =>

              a.title.localeCompare(
                b.title
              )

          );

          break;

        default:

          result.sort(

            (a, b) =>

              new Date(
                b.createdAt
              ) -

              new Date(
                a.createdAt
              )

          );

      }

      return result;

    }, [

      tasks,

      search,

      category,

      priority,

      status,

      sort,

    ]);

  return {

    search,

    setSearch,

    category,

    setCategory,

    priority,

    setPriority,

    status,

    setStatus,

    sort,

    setSort,

    filteredTasks,

  };

}
