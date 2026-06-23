import { useState } from "react";

import "./index.css";

import AppSidebar from "./components/layout/AppSidebar";

import Showcase from "./pages/Showcase";
import CreativeLab from "./pages/CreativeLab";

export default function App() {

  const [currentPage, setCurrentPage] = useState("showcase");

  return (

    <div className="app">

      <AppSidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="page-container">

        {currentPage === "showcase" && (
          <Showcase />
        )}

        {currentPage === "creative" && (
          <CreativeLab />
        )}

      </main>

    </div>

  );

}
