import React, {useState} from 'react';
import axios from 'axios';

const CreateTodo = () => {
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');
    const [completed, setCompleted] = useState(false);

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeResponsible = (e) => {
        setResponsible(e.target.value)
    }

    const onChangePriority = (e) => {
        setPriority(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${description}`);
        console.log(`Todo Responsible: ${responsible}`);
        console.log(`Todo Priority: ${priority}`);
        console.log(`Todo Completed: ${completed}`);

        const newTodo = {
            description: description,
            responsible: responsible,
            priority: priority,
            completed: completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        setDescription('');
        setResponsible('');
        setPriority('');
        setCompleted(false);
    }

    return (
        <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
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

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
}
export default CreateTodo;