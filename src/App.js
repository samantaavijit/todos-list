import './App.css';
import Header from './MyComponents/Header'
import { Footer } from './MyComponents/Footer'
import { Todos } from './MyComponents/Todos'
import {AddTodo} from './MyComponents/AddTodo'
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Ondelete of ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "It is title 1",
      desc: "It is description 1"
    },
    {
      sno: 2,
      title: "It is title 2",
      desc: "It is description 2"
    },
    {
      sno: 3,
      title: "It is title 3",
      desc: "It is description 3"
    }
  ]);


  return (
    <>
      <Header title="My Todos List" />
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
