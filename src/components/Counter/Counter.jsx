import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {

  const[count,setCount]=useState(0)

  let decres=()=>{
    if(count>1){
    setCount(count-1)
    }
  }
  // sample value to be replaced
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={decres} className={styles.cc}>-</button>
      <span data-cy="task-counter-value" >{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>setCount(count+1)} className={styles.cc}>+</button>
    </div>
  );
};

export default Counter;
