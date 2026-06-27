import { useEffect, useState } from "react";

import "./styles/theme.css";
import "./index.css";

import Navigation from "./components/Navigation";

import Showcase from "./pages/Showcase";
import CreativeLab from "./pages/CreativeLab";
import Presentation from "./pages/Presentation";
import Settings from "./pages/Settings";

import ThemeManager from "./core/theme/ThemeManager";

export default function App() {

  const [

    currentPage,

    setCurrentPage,

  ] = useState("library");

  /*
  ==========================
      INITIALIZE APP
  ==========================
  */

  useEffect(() => {

    ThemeManager.initialize();

  }, []);

  return (

    <div

      style={{

        display: "flex",

        minHeight: "100vh",

        background: "var(--color-background)",

        color: "var(--color-text)",

        fontFamily: "var(--font-family)",

        transition:
          "background-color var(--transition-medium), color var(--transition-medium)",

      }}

    >

      <Navigation

        currentPage={currentPage}

        setCurrentPage={setCurrentPage}

      />

      <main

        style={{

          flex: 1,

          overflow: "hidden",

          background: "var(--color-background)",

          color: "inherit",

        }}

      >

        {

          currentPage === "library" && (

            <Showcase />

          )

        }

        {

          currentPage === "workspace" && (

            <CreativeLab />

          )

        }

        {

          currentPage === "presentation" && (

            <Presentation />

          )

        }

        {

          currentPage === "settings" && (

            <Settings />

          )

        }

      </main>

    </div>

  );

}
