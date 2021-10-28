import { useState, useContext } from "react";
import { userContext } from "./users";


const Form = () => {
    const [user, setUser] = useState({firstName: '' , lastName: ''});
    const context = useContext(userContext);

    const onChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        if (user.firstName.trim() === '' || user.lastName.trim() === '') return;
        const newUser = {
            firstName: user.firstName.trim(),
            lastName: user.lastName.trim()
        }
        context.addUser(newUser);
        setUser({firstName:'', lastName:''});
    }

    return (
        <div>
            <p>Add User: </p>
            <form onSubmit={onSubmit}>
            <input type='text' name='firstName' value={user.firstName} onChange={onChange} />
            <input type='text' name='lastName' value={user.lastName} onChange={onChange} />
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;