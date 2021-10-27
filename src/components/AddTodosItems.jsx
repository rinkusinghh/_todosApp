import { useState } from 'react'

export const AddTodosItems = ({ passAddTodoItem }) => {

    const [ title, setTitle ] = useState("");
    const [ notes, setNotes ] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if(!title || !notes ) {
            alert(`Title and Notes cannot be empty!`)
        } else {
            passAddTodoItem(title, notes)
            setTitle("");
            setNotes("");
        }

    }

    return (
        <div className="container my-3">
            <h1 className="my-3">Add a todo</h1>
            <form onSubmit={submit}>
                <div className="mb-2">
                    <label htmpFor="text" className="form-label">Title</label>
                    <input type="text"
                        className="form-control"
                        id="text"
                        placeholder="Type here to add title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmpFor="text" className="form-label">Notes</label>
                    <input type="text"
                        className="form-control"
                        id="text"
                        placeholder="Type here to add notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
