import { useEffect, useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Showcase from "./pages/Showcase";
import CreativeLab from "./pages/CreativeLab";
import Presentation from "./pages/Presentation";
import Settings from "./pages/Settings";
import ThemeManager from "./core/theme/ThemeManager";
import AccentManager from "./core/accent/AccentManager";
import FontManager from "./core/font/FontManager";
import AnimationManager from "./core/animation/AnimationManager";
import CompactManager from "./core/compact/CompactManager";
import AccessibilityManager from "./core/accessibility/AccessibilityManager";
import CommandPalette from "./components/command/CommandPalette";
import useCommandPalette from "./hooks/useCommandPalette";
import registerDefaultCommands from "./core/command/registerDefaultCommands";
import LayoutManager from "./core/layout/LayoutManager";
import DockManager from "./core/docking/DockManager";

export default function App() {

  const [
    currentPage,
    setCurrentPage,
  ] = useState("library");

  /*
  ==========================
      COMMAND PALETTE
  ==========================
  */

  const commandPalette =
    useCommandPalette();

  /* another useEffect  */
  useEffect(() => {

  registerDefaultCommands({

    navigate: setCurrentPage,

  });

}, []);

  /*
  ==========================
      INITIALIZE APP
  ==========================
  */

 

  useEffect(() => {

    ThemeManager.initialize();

    AccentManager.initialize();

    FontManager.initialize();

    AnimationManager.initialize();

    CompactManager.initialize();

    AccessibilityManager.initialize();

     LayoutManager.initialize();

    DockManager.initialize();

  }, []);

  return (

    <>

      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "var(--color-background)",
          color: "var(--color-text)",
        }}
      >

        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <div
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: 0,
            overflow: "auto",
          }}
        >

          {

            currentPage === "library" &&

            <Showcase />

          }

          {

            currentPage === "workspace" &&

            <CreativeLab />

          }

          {

            currentPage === "presentation" &&

            <Presentation />

          }

          {

            currentPage === "settings" &&

            <Settings />

          }

        </div>

      </div>

      <CommandPalette

        open={
          commandPalette.open
        }

        onClose={
          commandPalette.closePalette
        }

      />

    </>

  );

}
