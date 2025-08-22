import { Alert } from "bootstrap";
import { useState, useEffect } from "react";
import Todos from "./Todos";

export const Addtodo = () => {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("i am ondelete of todo");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      Alert("Title and Description cannot be blank");
      return;
    }
    addTodo(title, desc);
    setDesc("");
    setTitle("");
  };

  return (
    <div className="container my-3">
      <h3> Add a Todo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn  btn-sm btn-success">
          Save
        </button>
      </form>

      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default Addtodo;
