import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.descriptio ? 'completed' : ''}>{props.todo.description}</td>
        <td className={props.todo.responsible ? 'completed' : ''}>{props.todo.responsible}</td>
        <td className={props.todo.priority ? 'completed' : ''}>{props.todo.priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

const TodosList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                setTodos(res.data);
            })
            .catch(function (err) {
                console.log(err);
            })
    })

    const todoList = () => {
        return todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    return(
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { todoList() }
                </tbody>
            </table>
        </div>
    )
}
export default TodosList;