import { useState } from "react";
import "./TagsInput.css";

export default function TagsInput({

  value = [],

  onChange,

}) {

  const [

    input,

    setInput,

  ] = useState("");

  function addTag() {

    const tag =

      input.trim().toLowerCase();

    if (

      !tag ||

      value.includes(tag)

    ) {

      setInput("");

      return;

    }

    onChange([

      ...value,

      tag,

    ]);

    setInput("");

  }

  function removeTag(

    tag,

  ) {

    onChange(

      value.filter(

        item =>

          item !== tag,

      ),

    );

  }

  function handleKeyDown(

    event,

  ) {

    if (

      event.key === "Enter" ||

      event.key === ","

    ) {

      event.preventDefault();

      addTag();

    }

    if (

      event.key === "Backspace" &&

      !input &&

      value.length

    ) {

      removeTag(

        value[

          value.length - 1

        ],

      );

    }

  }

  return (

    <div className="tags-input">

      <div className="tags-list">

        {

          value.map(tag => (

            <span

              key={tag}

              className="tag-chip"

            >

              {tag}

              <button

                type="button"

                onClick={() =>

                  removeTag(

                    tag,

                  )

                }

              >

                ×

              </button>

            </span>

          ))

        }

        <input

          type="text"

          placeholder="Add tag..."

          value={input}

          onChange={event =>

            setInput(

              event.target.value,

            )

          }

          onKeyDown={

            handleKeyDown

          }

          onBlur={

            addTag

          }

        />

      </div>

    </div>

  );

}
