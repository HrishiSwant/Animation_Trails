import "./DashboardTheme.css";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

import ThemeCard from "./ThemeCard";

const THEMES = [

    "default",

    "minimal",

    "glass",

    "analytics",

    "creative",

];

export default function DashboardTheme() {

    const {

        preferences,

        setTheme,

    } = useDashboardPreferences();

    return (

        <section className="dashboard-theme">

            <div className="dashboard-theme-header">

                <h2>

                    Dashboard Theme

                </h2>

                <p>

                    Customize the dashboard appearance.

                </p>

            </div>

            <div className="dashboard-theme-grid">

                {

                    THEMES.map(theme => (

                        <ThemeCard

                            key={theme}

                            title={

                                theme.charAt(0)

                                .toUpperCase()

                                +

                                theme.slice(1)

                            }

                            active={

                                preferences.theme === theme

                            }

                            onClick={() =>

                                setTheme(theme)

                            }

                        />

                    ))

                }

            </div>

        </section>

    );

}
