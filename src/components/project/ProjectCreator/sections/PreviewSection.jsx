import ProjectPreview from "../components/ProjectPreview";

export default function PreviewSection({

  form,

}) {

  return (

    <section className="wizard-section">

      <h3>

        Preview

      </h3>

      <ProjectPreview

        project={form}

      />

    </section>

  );

}
