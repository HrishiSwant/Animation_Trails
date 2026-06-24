import "./Toolbar.css";

export default function Toolbar(){

    const tools=[

        "✏ Pencil",

        "🧽 Eraser",

        "📏 Line",

        "⬛ Rectangle",

        "⭕ Circle",

        "↶ Undo",

        "↷ Redo",

        "🗑 Clear"

    ];

    return(

        <div className="toolbar-sketch">

            {tools.map(tool=>(

                <button
                    key={tool}
                >

                    {tool}

                </button>

            ))}

        </div>

    );

}
