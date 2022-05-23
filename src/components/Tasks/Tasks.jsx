import React, { useState } from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({info,onDelete}) => {

  const[done,setdone]=useState(info.done)

  let checkbox=(e)=>{
    setdone(e.target.value)
  }
  // console.log(data)
  // NOTE: do not delete `data-cy` key value pair
  return (  
    <>
  
          
                  <ul data-cy="tasks" className={done?styles.tasks:""}>
                  <Task info={info}onDelete={onDelete}/>
                  </ul>

    <div data-cy="tasks-empty" className={styles.empty}>
        
        </div>
    </>
    
  );
};

export default Tasks;
