import React, {useState, useEffect} from 'react';

import If from './if.jsx';

const API = 'http://stevechutaskmaster.us-west-2.elasticbeanstalk.com'

function Task() {

  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
    fetch( API + "/tasks", {
      mode:'cors',
    })
    .then( data => data.json() )
    .then( tasks => setTasks(tasks) )
    .catch( console.error );

  };

  useEffect(_getTasks, []);

  return (
    <ul>
      {tasks.map( (task) =>
        <li id="task" key={task.id}>
          <div>
            <img src={task.thumbUrl} alt={task.thumbUrl} height="50px" />
          </div>
          <div id="task_title">
            <span><b>Title: </b>{task.title}</span>
            <span><b>Assigned: </b>
              <If condition={ task.assignee !== null} >
                {task.assignee}
              </If>
              <If condition={ task.assignee === null} >
                No One
              </If>
            </span>
          </div>
          <div id="task_description">
            <span><b>Description: </b>{task.description}</span>
            <span><b>Status: </b>{task.status}</span>
          </div>
          <div id="add_image">
            <form action={API + '/tasks/' + task.id + '/images'}  method="post" encType="multipart/form-data">
                <label>
                  <span>Upload Image</span>
                  <input name="file" type="file" />
                </label>
                <button>Save</button>
            </form>
          </div>
        </li>
      )}
    </ul>
  )
}

class TaskList extends React.Component {
  render() {
    return (
      <>
        <h2><b>Task List</b></h2>
        <Task />
      </>
    )
  }
}

export default TaskList;
