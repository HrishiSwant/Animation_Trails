import { useState } from "react";

import "./index.css";

import Sidebar from "./components/Sidebar";

import Showcase from "./pages/Showcase";

import CreativeLab from "./pages/CreativeLab";

export default function App() {

  const [page, setPage] = useState("showcase");

  return (

    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#09090B",
      }}
    >

      <Sidebar
        page={page}
        setPage={setPage}
      />

      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >

        {page === "showcase" ? (
          <Showcase />
        ) : (
          <CreativeLab />
        )}

      </div>

    </div>

  );

}
