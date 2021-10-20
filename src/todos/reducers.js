import {
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_AS_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    loadTodosFailure
} from './actions';

const intialState = {isLoading: false, data: []};


export const todos = (state=intialState, action) => {
    const {type, payload} = action;
    switch (type){
        case CREATE_TODO:{
            const {title} = payload;
            const newTodo = {
                title,
                isCompleted: false,
            }
            return { 
                ...state, data: state.data.concat(newTodo)
            };
        }
        case REMOVE_TODO:{
            const {text} = payload;
            return {...state, data: state.data.filter(todo => todo.title !== text)};
        }
        case MARK_AS_COMPLETED:{
            const {text} = payload;
            return {
                ...state, data: state.data.map(todo => {
                    if (todo.title === text){
                        return {...todo, isCompleted:true};
                    }
                    return todo;
                })
            };
        }
        case LOAD_TODOS_SUCCESS:{
            const {todos} = payload;
            return {...state, isLoading:false, data:todos};
        }
        case LOAD_TODOS_IN_PROGRESS:{
            return {...state, isLoading: true};
        }
        case LOAD_TODOS_FAILURE:
            return {...state, isLoading:false};
        default:
            return state;
            
    }
}
