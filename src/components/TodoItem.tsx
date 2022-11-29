import React, { FC } from 'react';

import { ITodo } from 'types/data';

interface ITodoItemProps extends ITodo {
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: FC<ITodoItemProps> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <div className="wrapListItem">
      <div className="listItemTask">
        <input
          type="checkbox"
          checked={complete}
          onChange={() => toggleTodo(id)}
          className="checkbox"
        />
        <span>{title}</span>
      </div>
      <button onClick={() => removeTodo(id)} className="btnDelete">
        X
      </button>
    </div>
  );
};

export { TodoItem };
