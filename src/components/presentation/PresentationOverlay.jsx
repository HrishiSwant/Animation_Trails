import { useEffect, useState } from "react";

import "./Presentation.css";

export default function PresentationOverlay() {

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setVisible(false);

      }, 4000);

    return () =>

      clearTimeout(timer);

  }, []);

  if (!visible) {

    return null;

  }

  return (

    <div className="presentation-overlay">

      <div className="presentation-overlay-card">

        <h1>

          🎬 Presentation Mode

        </h1>

        <p>

          Welcome to your workspace presentation.

        </p>

        <div className="presentation-shortcuts">

          <div>

            <strong>→</strong>

            <span>

              Next Slide

            </span>

          </div>

          <div>

            <strong>←</strong>

            <span>

              Previous Slide

            </span>

          </div>

          <div>

            <strong>Space</strong>

            <span>

              Next Slide

            </span>

          </div>

          <div>

            <strong>F</strong>

            <span>

              Toggle Fullscreen

            </span>

          </div>

          <div>

            <strong>Esc</strong>

            <span>

              Exit Presentation

            </span>

          </div>

        </div>

        <small>

          This message will disappear automatically.

        </small>

      </div>

    </div>

  );

}
