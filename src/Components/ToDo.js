import React, {Component} from 'react';
import Task from './Task';
import TaskInput from './TaskInput';
import '../Styles/style.css';

class ToDo extends Component {
    constructor (){
        super();
        this.state = {
            
            tasks: [
                { id:0 , title: "Create react app" , done:false },
                { id:1 , title: "Create To Do List" , done:true }, 
            ]
        };
    }

    addTask = task => {

        this.setState( {
            tasks: [...this.state.tasks, {
               id: this.state.tasks.length !==0 ? this.state.tasks.length:0,
                title:task,
                done:false
            }]
            
        })
    }

   /* addTask = task => {
        this.setState(state => {
            let {tasks} = state;
            tasks.push( {
                id:tasks.length !==0 ? tasks.length: 0 ,
                title:task,
                done:false
            })
            return tasks;
        })
    }
    */
    doneTask = id => {
        const index = this.state.tasks.map (task => task.id).indexOf (id);
        this.setState(state => {
            let {tasks} =state;
            tasks[index].done = true;
            return tasks;
        });
    }

    deleteTask = id => {
        const index = this.state.tasks.map (task => task.id).indexOf (id);
        this.setState(state => {
            let {tasks} =state;
            delete tasks[index];
            return tasks;
        });
    }
    
    
    
    render () {
        const {tasks} = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);
        return (

            <div className = 'App'>
                  
               <h1 className='top'> Active Tasks : {activeTasks.length}</h1>
               {
                   [...activeTasks, ...doneTasks].map(task => (
                    <Task 
                        doneTask = { () => this.doneTask(task.id)} 
                        deleteTask = { () => this.deleteTask(task.id)}
                        task={task} 
                        key={task.id}>

                    </Task>
                  ))
               }

               <TaskInput addTask = {this.addTask}></TaskInput>
                 
            </div>

        )
            

        
    }
};

export default ToDo;

