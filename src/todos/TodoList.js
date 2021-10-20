import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import { getTodos, getTodosLoading } from './selectors';
import {markAsCompleted, removeTodo} from './actions';
import { loadTodos } from './thunk';



const TodoList = ({todos=[], onRemovePress, markAsCompleted, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const  loadingMessage = <div>Content is loading .......</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem key={todo.title} todo={todo} onMarkAsCompleted={markAsCompleted} onRemovePress={onRemovePress} />)}
        </div>
    );

    return isLoading? loadingMessage: content;

}
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePress: text => dispatch(removeTodo(text)),
    markAsCompleted: text => dispatch(markAsCompleted(text)),
    startLoadingTodos: () => dispatch(loadTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
