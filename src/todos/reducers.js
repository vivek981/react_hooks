import {
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_AS_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    loadTodosFailure
} from './actions';
export const isLoading = (state=false, action) => {
    const {type} = action;
    switch(type){
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_SUCCESS:
            return false;
        default:
            return state;
    }
}


export const todos = (state=[], action) => {
    const {type, payload} = action;
    switch (type){
        case CREATE_TODO:{
            const {text} = payload;
            const newTodo = {
                title: text,
                isCompleted: false,
            }
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const {text} = payload;
            return state.filter(todo => todo.title !== text );
        }
        case MARK_AS_COMPLETED:{
            const {text} = payload;
            console.log(text);
            return state.map(todo => {
                if (todo.title === text){
                    return {...todo, isCompleted:true};
                }
                return todo;
            })
        }
        case LOAD_TODOS_SUCCESS:{
            const {todos} = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:{

        }
        case LOAD_TODOS_FAILURE:
        default:
            return state;
            
    }
}
