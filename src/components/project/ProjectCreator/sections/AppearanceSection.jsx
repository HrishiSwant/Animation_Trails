import IconPicker from "../components/IconPicker";
import ColorPicker from "../components/ColorPicker";

export default function AppearanceSection({

  form,

  setForm,

}) {

  return (

    <section className="wizard-section">

      <h3>

        Appearance

      </h3>

      <div className="form-group">

        <label>

          Project Icon

        </label>

        <IconPicker

          value={form.icon}

          onChange={icon =>

            setForm({

              ...form,

              icon,

            })

          }

        />

      </div>

      <div className="form-group">

        <label>

          Project Color

        </label>

        <ColorPicker

          value={form.color}

          onChange={color =>

            setForm({

              ...form,

              color,

            })

          }

        />

      </div>

    </section>

  );

}
