import { todos } from "./reducers";

export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
});

export const markAsCompleted = text => ({
    type: MARK_AS_COMPLETED,
    payload: {text},
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,

});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos},
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE
});
