import ProjectTemplates from "../../../../core/project/ProjectTemplates";

export default function TemplateSection({

  form,

  setForm,

}) {

  return (

    <section className="wizard-section">

      <h3>

        Template

      </h3>

      <div className="template-grid">

        {

          ProjectTemplates

            .getAll()

            .map(item => (

              <button

                key={item.id}

                type="button"

                className={

                  form.template === item.id

                    ? "template-card active"

                    : "template-card"

                }

                onClick={() =>

                  setForm({

                    ...form,

                    template:

                      item.id,

                  })

                }

              >

                <div className="template-icon">

                  {item.icon}

                </div>

                <div className="template-name">

                  {item.name}

                </div>

                <div className="template-description">

                  {item.description}

                </div>

              </button>

            ))

        }

      </div>

    </section>

  );

}
