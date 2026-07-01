export default function GeneralSection({

  form,

  setForm,

  errors,

  inputRef,

}) {

  return (

    <section className="wizard-section">

      <h3>

        General

      </h3>

      <div className="form-group">

        <label>

          Project Name

        </label>

        <input

          ref={inputRef}

          type="text"

          placeholder="My Awesome Project"

          value={form.name}

          onChange={event =>

            setForm({

              ...form,

              name:

                event.target.value,

            })

          }

        />

        {

          errors.name && (

            <div className="form-error">

              {errors.name}

            </div>

          )

        }

      </div>

      <div className="form-group">

        <label>

          Description

        </label>

        <textarea

          rows={4}

          placeholder="Describe your project..."

          value={form.description}

          onChange={event =>

            setForm({

              ...form,

              description:

                event.target.value,

            })

          }

        />

        {

          errors.description && (

            <div className="form-error">

              {errors.description}

            </div>

          )

        }

      </div>

    </section>

  );

}
