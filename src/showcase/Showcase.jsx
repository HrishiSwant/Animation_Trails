import { useState } from "react";
import animations from "./animations";
import "./showcase.css";

export default function Showcase() {

    const [selected,setSelected]=useState(animations[0]);
    const [search,setSearch]=useState("");

    const filtered=animations.filter(a=>
        a.name.toLowerCase().includes(search.toLowerCase())
    );

    return(

<div className="app">

<div className="sidebar">

<h1>Design Showcase</h1>

<input
placeholder="Search..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

{

filtered.map(item=>(

<button
key={item.name}
onClick={()=>setSelected(item)}
>

{item.name}

</button>

))

}

</div>

<div className="preview">

<h2>{selected.name}</h2>

<div className="preview-box">

{selected.component}

</div>

</div>

</div>

);

}
