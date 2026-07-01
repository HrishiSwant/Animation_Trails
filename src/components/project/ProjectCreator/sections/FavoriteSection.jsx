import FavoriteToggle from "../components/FavoriteToggle";

export default function FavoriteSection({

  form,

  setForm,

}) {

  return (

    <section className="wizard-section">

      <h3>

        Favorite

      </h3>

      <FavoriteToggle

        value={form.favorite}

        onChange={favorite =>

          setForm({

            ...form,

            favorite,

          })

        }

      />

    </section>

  );

}
