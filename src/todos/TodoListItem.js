import React from 'react';
import { todos } from './reducers';

const TodoListItem = ({todo, onRemovePress, onMarkAsCompleted}) => (
    <div className="todo-item-container">
        <h3>{todo.title}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null : <button className="completed-button" onClick={()=> onMarkAsCompleted(todo.title)}>Mark as Completed</button>}
            <button className="remove-button" onClick={()=> onRemovePress(todo.title)}>Remove</button>
        </div>
    </div>

)

export default TodoListItem;
