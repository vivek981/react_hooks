import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from './actions';
import { getTodos } from './selectors';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState(''); 
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Type your text here'/>
            <button className="new-todo-button" onClick={() => {
                const isDuplicateText = todos.some(todo=> todo.title === inputValue);
                if (!isDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
             }}>
                Create Todo
            </button>
        </div>
    );

}
const mapStateToProps = state =>({
    todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
