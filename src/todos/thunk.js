import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

export const displayAlert = text => () =>{
    alert(text);
};

export const loadTodos = () => async(dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    }
    catch(e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }

}