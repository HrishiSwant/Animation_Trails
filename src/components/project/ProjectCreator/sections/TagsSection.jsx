import TagsInput from "../components/TagsInput";

export default function TagsSection({

  form,

  setForm,

  errors,

}) {

  return (

    <section className="wizard-section">

      <h3>

        Tags

      </h3>

      <TagsInput

        value={form.tags}

        onChange={tags =>

          setForm({

            ...form,

            tags,

          })

        }

      />

      {

        errors.tags && (

          <div className="form-error">

            {errors.tags}

          </div>

        )

      }

    </section>

  );

}
