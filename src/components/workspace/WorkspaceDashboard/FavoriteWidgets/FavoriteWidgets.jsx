import "./FavoriteWidgets.css";

import useDashboardPreferences from "../../../../hooks/dashboard/useDashboardPreferences";

import FavoriteWidgetCard from "./FavoriteWidgetCard";

const LABELS = {

    overview: "Workspace Overview",

    health: "Workspace Health",

    insights: "Workspace Insights",

    favorites: "Favorite Projects",

    recent: "Recent Projects",

    continueWorking: "Continue Working",

    todaysActivity: "Today's Activity",

    productivity: "Productivity Score",

    weekly: "Weekly Activity",

    streak: "Workspace Streak",

    summary: "Dashboard Summary",

    recommendations: "Recommendations",

};

export default function FavoriteWidgets() {

    const {

        preferences,

    } = useDashboardPreferences();

    return (

        <section className="favorite-widgets">

            <div className="favorite-widgets-header">

                <h2>

                    ⭐ Favorite Widgets

                </h2>

                <p>

                    Your pinned dashboard widgets.

                </p>

            </div>

            {

                preferences.favoriteWidgets.length === 0

                ? (

                    <div className="favorite-widgets-empty">

                        No favorite widgets yet.

                    </div>

                )

                : (

                    <div className="favorite-widgets-grid">

                        {

                            preferences.favoriteWidgets.map(id => (

                                <FavoriteWidgetCard

                                    key={id}

                                    title={LABELS[id]}

                                />

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

}
