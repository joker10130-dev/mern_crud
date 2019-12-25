import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EditTodo = (props) => {
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/todos/'+props.match.params.id)
            .then(res => {
                setDescription(res.data.description);
                setResponsible(res.data.responsible);
                setPriority(res.data.priority);
                setCompleted(res.data.completed);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.match.params.id])

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeResponsible = (e) => {
        setResponsible(e.target.value)
    }

    const onChangePriority = (e) => {
        setPriority(e.target.value)
    }

    const onChangeCompleted = (e) => {
        setCompleted(!completed);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const obj = {
            description: description,
            responsible: responsible,
            priority: priority,
            completed: completed
        };
        console.log(obj);

        axios.post('http://localhost:4000/todos/update/'+ props.match.params.id, obj)
            .then(res => console.log(res.data));

        props.history.push('/');
    }

    return (
        <div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={description}
                            onChange={onChangeDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={responsible}
                            onChange={onChangeResponsible}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={priority==='Low'} 
                                onChange={onChangePriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={priority==='Medium'} 
                                onChange={onChangePriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={priority==='High'} 
                                onChange={onChangePriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={onChangeCompleted}
                            checked={completed}
                            value={completed}
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>

                <br />

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
export default EditTodo;