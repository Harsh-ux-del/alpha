
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from './MyComponents/Footer';
import React, { useEffect, useState } from 'react';
import { Addtodo } from "./MyComponents/Addtodo";
import  About  from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  const onDelete = (todo) => {
    console.log("i am ondelete of todo")
    /*down line () if you use todo instead of e then you cN DELETE all the task at once by just clicking delete in any sinlge delete button in the output isn't it interseting*/
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc)
    let sno
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  return (
    <>
      <Router>
        <Header title="MY TODOS LIST" searchbar={false} />
        <Routes>
            <Route path ="/" element= {<Addtodo addTodo={addTodo}/>}>
            </Route>
            <Route path ="/about" element={<About />} />
          </Routes> 
          <Footer/>
          </Router>
        </>
  );
};
export default App;
