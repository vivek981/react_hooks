import React from 'react';

const TodoListItem = ({todo, onRemovePress, onMarkAsCompleted}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null : <button className="completed-button" onClick={()=> onMarkAsCompleted(todo.text)}>Mark as Completed</button>}
            <button className="remove-button" onClick={()=> onRemovePress(todo.text)}>Remove</button>
        </div>
    </div>

)

export default TodoListItem;
