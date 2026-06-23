import { useState } from "react";

import "./index.css";

import Navigation from "./components/Navigation";

import Showcase from "./pages/Showcase";
import CreativeLab from "./pages/CreativeLab";
import Presentation from "./pages/Presentation";
import Settings from "./pages/Settings";

export default function App(){

    const [currentPage,setCurrentPage]=useState("library");

    return(

        <div
            style={{
                display:"flex",
                height:"100vh",
                background:"#09090B"
            }}
        >

            <Navigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <div
                style={{
                    flex:1,
                    overflow:"hidden"
                }}
            >

                {currentPage==="library" && <Showcase/>}

                {currentPage==="workspace" && <CreativeLab/>}

                {currentPage==="presentation" && <Presentation/>}

                {currentPage==="settings" && <Settings/>}

            </div>

        </div>

    );

}
