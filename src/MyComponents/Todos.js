import React from 'react'
import { TodoItem } from "./TodoItem";
export const Todos = ({todos, onDelete}) => {
    return (
        <div className="container">
            <h3> Todos List</h3>
            {todos.length === 0 ?
                    (<p>No todos to display</p>) :
                    (todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} /> 

                    ))
                    )}
        </div>
    );
}

export default Todos;