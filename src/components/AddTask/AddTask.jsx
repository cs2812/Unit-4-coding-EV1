import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addtodo}) => {

  const[todo,setTodo]=useState("")
  

  let change=(e)=>{
    setTodo(e.target.value)
  }
  let click=()=>{
    console.log(todo)
    addtodo(todo)
    setTodo("")
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={change} placeholder="ADD SOMTHIG" className={styles.in}/>
      <button data-cy="add-task-button" onClick={click} className={styles.btn}>+</button>
    </div>
  );
};

export default AddTask;
