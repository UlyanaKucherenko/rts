import {ITodo} from "../types/data";

interface ITodoItemProps extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const {id, title, complete, toggleTodo, removeTodo} = props;

    return <div>
        <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
        {title}
        <button onClick={() => removeTodo(id)}>X</button>
    </div>
}

export
{
    TodoItem
}