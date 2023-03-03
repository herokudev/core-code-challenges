import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const getRequest = async () => {
    const respuesta = await fetch('http://localhost:5000/dbtodos');
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
    setTodos(respuestaJson);
  };

  const postRequest = async (todo) => {
    const respuesta = await fetch('http://localhost:5000/dbtodos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    });
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
  };

  const deleteRequest = async (id) => {
    const respuesta = await fetch(`http://localhost:5000/dbtodos/${id}`, {
      method: 'DELETE',
    });
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
  };

  const putRequest = async (todoId, newValue) => {
    const todo = {
      id: todoId,
      text: newValue.text,
      description: newValue.description,
      isDone: newValue.isDone,
    };
    console.log(`todo.id --> ${todo.id} `);
    console.log(`todo.text --> ${todo.text} `);
    console.log(`todo.description --> ${todo.description} `);
    console.log(`todo.isDone --> ${todo.isDone} `);
    const respuesta = await fetch('http://localhost:5000/dbtodos', {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' },
    });
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
  };

  useEffect(() => {
    getRequest();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    console.log(
      `This is the new item in the list --> ${todo.id} - ${todo.text} - ${todo.description}`
    );
    postRequest(todo);
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const showDescription = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.showDescription = !todo.showDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    putRequest(todoId, newValue);
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    deleteRequest(id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    </>
  );
}
export default TodoList;
