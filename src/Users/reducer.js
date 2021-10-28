import { ADD_USER } from "./types";

const addPerson = (user, state) => {
    const newUsers = [...state.users, user];
    return {
        ...state, users: newUsers
    };
}

export default (state, action) => {
    switch(action.type){
        case ADD_USER:
            return addPerson(action.payload, state);
        default:
            return state;
    }
}