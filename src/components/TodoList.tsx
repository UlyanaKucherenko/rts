import React, { FC } from 'react';

import { ITodo } from 'types/data';
import { TodoItem } from 'components/TodoItem';

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div className="wrapList">
      {items.map((todo) => (
        <TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo} />
      ))}
    </div>
  );
};

export { TodoList };
