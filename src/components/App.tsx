import React, { useState, useEffect, FC } from 'react';
import { v4 as uuid } from 'uuid';

import { TodoList } from 'components/TodoList';
import { ITodo } from 'types/data';
// import { TodoInput } from './TodoInput';
import { TodoTextarea } from './TodoTextarea';

const App: FC = () => {
  const temp = localStorage.getItem('todos');
  const persistedState = temp ? JSON.parse(temp) : [];
  const [todos, setTodos] = useState<ITodo[]>(persistedState || []);

  const addTodo = (value: string, typeTask: string) => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: uuid(),
          title: value,
          complete: false,
          typeTask: typeTask,
        },
      ]);
    }
  };
  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
          borderColor: 'green',
        };
      })
    );
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="header">
        <h1>TODO</h1>
        <TodoTextarea placeholder="new todo..." onchange={addTodo} />
        {/* <TodoInput placeholder="new todo..." onchange={addTodo} />*/}
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export { App };
