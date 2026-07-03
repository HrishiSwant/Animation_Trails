import {

  useEffect,

  useState,

} from "react";

import "../ProjectDashboard.css";

function formatTime(

  value,

) {

  const now =

    Date.now();

  const diff =

    Math.floor(

      (now - value) / 1000,

    );

  if (diff < 10) {

    return "Just now";

  }

  if (diff < 60) {

    return `${diff} seconds ago`;

  }

  const minutes =

    Math.floor(

      diff / 60,

    );

  if (minutes < 60) {

    return minutes === 1

      ? "1 minute ago"

      : `${minutes} minutes ago`;

  }

  const hours =

    Math.floor(

      minutes / 60,

    );

  if (hours < 24) {

    return hours === 1

      ? "1 hour ago"

      : `${hours} hours ago`;

  }

  const days =

    Math.floor(

      hours / 24,

    );

  if (days === 1) {

    return "Yesterday";

  }

  if (days < 7) {

    return `${days} days ago`;

  }

  return new Date(

    value,

  ).toLocaleDateString(

    undefined,

    {

      year:

        "numeric",

      month:

        "short",

      day:

        "numeric",

    },

  );

}

export default function ActivityItem({

  icon,

  color,

  title,

  description,

  time,

}) 

  const [

  relativeTime,

  setRelativeTime,

] = useState(

  formatTime(

    time,

  ),

);

useEffect(() => {

  const update = () =>

    setRelativeTime(

      formatTime(

        time,

      ),

    );

  update();

  const timer =

    setInterval(

      update,

      60000,

    );

  return () =>

    clearInterval(

      timer,

    );

}, [

  time,

]);

{

  return (

    <div className="activity-item">

      <div className="activity-line" />

      <div

  className="activity-icon"

  style={{

    background: color,

  }}

>

        {icon}

      </div>

      <div className="activity-content">

        <h4>

          {title}

        </h4>

        {

          description && (

            <p>

              {description}

            </p>

          )

        }

        <span>

          {relativeTime}

        </span>

      </div>

    </div>

  );

}
