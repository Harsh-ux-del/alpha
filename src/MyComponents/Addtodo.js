import { Alert } from 'bootstrap';
import React, { useState } from 'react';

export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            Alert("Title and Description cannot be blank");
            return;
        }
        addTodo(title,desc);
    }
    return (
        <div className="container my-3">
            <h3> Add a Todo </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="Title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3 form-check">
                </div>
                <button type="submit" className="btn  btn-sm btn-success">Save</button>
            </form>


        </div>
    )
}

export default Addtodo
