import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import { useState } from "react";


const Task = ({info,onDelete}) => {
  const[done,setdone]=useState(info.done)

  let checkbox=(e)=>{
    setdone(e.target.value)
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.div1}>
      <input type="checkbox" data-cy="task-checkbox" onChange={checkbox}  />
      <div data-cy="task-text" className={done?styles.chetan:""}>{info.text}</div>
      </div>
      <div className={styles.div2}>

      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>{onDelete(info.id)}}>Delete</button>
      </div>
      
    </li>
  );
};

export default Task;
