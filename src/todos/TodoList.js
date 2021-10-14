import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import {markAsCompleted, removeTodo} from './actions';


const TodoList = ({todos=[], onRemovePress, markAsCompleted}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onMarkAsCompleted={markAsCompleted} onRemovePress={onRemovePress} />)}
    </div>

)
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePress: text => dispatch(removeTodo(text)),
    markAsCompleted: text => dispatch(markAsCompleted(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
