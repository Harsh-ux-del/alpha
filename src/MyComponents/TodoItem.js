import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className=" justify-content-between align-items-center my-3 bg-light p-3 rounded"
      style={{
        display: "flex",
      }} >
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)} >Delete{""} </button>
        </div>
    );
} ;