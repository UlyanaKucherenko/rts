import React, { FC } from 'react';

import { ITodo } from 'types/data';

interface ITodoItemProps extends ITodo {
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: FC<ITodoItemProps> = (props) => {
  const { id, title, complete, typeTask, toggleTodo, removeTodo } = props;
  const borderColor = complete ? { borderLeftColor: 'gray' } : { borderLeftColor: `${typeTask}` };
  const lineThroughText = complete
    ? { textDecoration: ' line-through' }
    : { textDecoration: 'none' };

  return (
    <div className="wrapListItem" style={borderColor}>
      <div className="listItemTask">
        <input
          type="checkbox"
          checked={complete}
          onChange={() => toggleTodo(id)}
          className="checkbox"
        />
        <span style={lineThroughText}>{title}</span>
      </div>
      <button onClick={() => removeTodo(id)} className="btnDelete">
        X
      </button>
    </div>
  );
};

export { TodoItem };
