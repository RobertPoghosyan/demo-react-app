import React from 'react';

const Task = ({task,...props}) => {

    const ActionBtn = () => (
        <div className = 'action-btn' >
            {!task.done ? 
               ( <p  onClick = {props.doneTask}> <span role="img" aria-label = "done"> ✅ </span>  </p> ) : 
               ( <p onClick = {props.deleteTask}> <span role="img" aria-label = "delete">  ❌ </span> </p> )
            } 

         </div>
    );

    const className = 'task' + (task.done ? 'task-done' : "");
    return (
        <div className={className}>
            <p> {task.title} </p>
            <ActionBtn></ActionBtn>
        </div>
    );
};

export default Task;