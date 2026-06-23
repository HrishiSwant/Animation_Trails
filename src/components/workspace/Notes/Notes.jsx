import "./Notes.css";

export default function Notes(){

    return(

        <div className="notes">

            <div className="notes-header">

                <h2>📝 Notes</h2>

                <button>

                    + New Note

                </button>

            </div>

            <textarea

                placeholder="Start writing..."

            />

        </div>

    );

}
