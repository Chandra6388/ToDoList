// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function AddWork() {
    let navigate = useNavigate();

    const [workOutObj, setWorkOutObj] = useState({
        work: ''
    })

    const WorkOutconfigList = [
        {
            label: "work",
            placeholder: "enter work",
            key: 'work'
        },
    ]

    const onsubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/todolist", workOutObj)
        navigate("/")
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 rounded border p-4 mt-4 shadow'>
                    <h3 className='text-center m-3'>Add Work</h3>
                    <form className='needs-validation' onSubmit={onsubmit}>
                        <div className='mb-3'>
                            {
                                WorkOutconfigList.map((workout, index) => {
                                    return (
                                        <div key={index}>
                                            <label htmlFor="name" className='form-label my-2'>{workout.label}</label>
                                            <input type="text"
                                                required
                                                className='form-control input'
                                                placeholder={workout.placeholder}
                                                
                                                value={workOutObj[workout.key]}
                                                onChange={(event) => {
                                                    setWorkOutObj({
                                                        ...workOutObj,
                                                        [workout.key]: event.target.value
                                                    })
                                                }}

                                            />
                                        </div>
                                    )
                                })
                            }
                            <div className='text-center my-3'>
                                <button type='Submit' className='btn btn-outline-primary text-center mx-2'>Submit</button>
                                <Link className='btn btn-outline-danger' to={"/"}>Cancel</Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
