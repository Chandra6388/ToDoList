import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Login() {

  const [workOut, setWorkOut] = useState([])
  // eslint-disable-next-line
  const { id } = useParams();


  useEffect(() => {
    loadWorkOut()
  }, [])

  const loadWorkOut = async () => {
    const result = await axios.get("http://localhost:3000/todolist");
    setWorkOut(result.data.TodoListData);
    
  }

  const deletWorkout = async (id) => {
    await axios.delete(`http://localhost:3000/todolist/${id}`);
    loadWorkOut()
  }


  return (
    <div>
      <div className="container">
        <div className='py-4'>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Work</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                workOut.map((workout, index) => {

                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    
                    <td>{workout.work}</td>
                    <td>
                      <Link className="btn btn-outline-primary mx-2" to={'/editworkout/'+workout._id}>Edit btn</Link>
                      <button type='Submit' className="btn btn-outline-danger" onClick={() => deletWorkout(workout._id)}>Delete</button>
                    </td>

                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
