import "./ThemeCard.css";

export default function ThemeCard({

    title,

    active,

    onClick,

}) {

    return (

        <button

            className={

                active

                    ? "theme-card active"

                    : "theme-card"

            }

            onClick={onClick}

        >

            {title}

        </button>

    );

}
