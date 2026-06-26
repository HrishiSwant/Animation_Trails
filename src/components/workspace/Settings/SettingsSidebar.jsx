import "./Settings.css";

const sections = [

  {
    id: "appearance",
    icon: "🎨",
    label: "Appearance",
  },

  {
    id: "workspace",
    icon: "🖥️",
    label: "Workspace",
  },

  {
    id: "presentation",
    icon: "🎬",
    label: "Presentation",
  },

  {
    id: "notes",
    icon: "📝",
    label: "Notes",
  },

  {
    id: "sketch",
    icon: "✏️",
    label: "Sketch",
  },

  {
    id: "assets",
    icon: "📁",
    label: "Assets",
  },

  {
    id: "tasks",
    icon: "✅",
    label: "Tasks",
  },

  {
    id: "storage",
    icon: "💾",
    label: "Storage",
  },

  {
    id: "accessibility",
    icon: "♿",
    label: "Accessibility",
  },

  {
    id: "developer",
    icon: "⚙️",
    label: "Developer",
  },

  {
    id: "about",
    icon: "ℹ️",
    label: "About",
  },

];

export default function SettingsSidebar({

  activeSection,

  onChange,

}) {

  return (

    <aside className="settings-sidebar">

      <div className="settings-sidebar-header">

        <h2>

          ⚙ Settings

        </h2>

      </div>

      <nav className="settings-nav">

        {

          sections.map(

            (section) => (

              <button

                key={section.id}

                className={

                  activeSection === section.id

                    ? "settings-nav-item active"

                    : "settings-nav-item"

                }

                onClick={() =>

                  onChange(

                    section.id

                  )

                }

              >

                <span>

                  {section.icon}

                </span>

                <span>

                  {section.label}

                </span>

              </button>

            )

          )

        }

      </nav>

    </aside>

  );

}
