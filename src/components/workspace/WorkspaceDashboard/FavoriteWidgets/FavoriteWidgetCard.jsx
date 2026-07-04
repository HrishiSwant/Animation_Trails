import "./FavoriteWidgetCard.css";

export default function FavoriteWidgetCard({

  title,

}) {

  return (

    <div className="favorite-widget-card">

      ⭐

      <span>

        {title}

      </span>

    </div>

  );

}
