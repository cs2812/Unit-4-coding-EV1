import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import jsondata from "../data/tasks.json"

import styles from "./taskApp.module.css";

const TaskApp = () => {

  const[act,setAct]=useState([])

  let addtodo=(value)=>{
    console.log(value)
    setAct([...act,{
      id:Date.now(),
      done:false,
      text:value,
    }])
    
  }

  let onDelete=(id)=>{
    let newdata = act.filter((todo)=>todo.id!==id);
    setAct(newdata)
  }


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask addtodo={addtodo}/> 
      {
        jsondata.map((info)=>(
          <Tasks key={info.id} info={info} onDelete={onDelete}/>

        ))}
        {
        act.map((info)=>(
          <Tasks key={info.id} info={info} onDelete={onDelete}/>
        ))

        
      }
       
    </div>
  );
};

export default TaskApp;
