import { createContext, useReducer } from "react";
import Form from "./NewUserForm";
import reducer from "./reducer";
import { ADD_USER } from "./types";


export const userContext = createContext({
    users: [],
    addUser: (user) => {}
})

const User = () => {
    const intialState = {
        users: [],     
    };
    const [state, dispatch] = useReducer(reducer, intialState);

    const addUser = user => {
        dispatch({
            type: ADD_USER,
            payload: user
        });
    };

    return (
        <userContext.Provider value={{users:state.users, addUser}}>
            <div>
                <Form />
                <h2>Users</h2>
                <>
                {state.users.map( user => (
                    <div key={Math.random()}>
                        <p>{user.firstName} {user.lastName}</p>
                    </div>
                )
                )}
                </>
            </div>
        </userContext.Provider>
    )

}
export default User;
