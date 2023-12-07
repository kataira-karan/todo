import Head from "next/head";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";
import AllTasks from "../Components/AllTasks";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [task, settask] = useState({ id: 0, title: "", isCompleted: false });
  const [allTasks, setallTasks] = useState([]);
  const [error, seterror] = useState("");

  const completeTask = (currentTask) => {
    let updatedTasks = allTasks;

    updatedTasks.map((task) => {
      if (task.id === currentTask.id) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setallTasks([...updatedTasks]);
  };

  const deleteTask = (currentTask) => {
    // console.log("Completing Task");
    // console.log(currentTask);
    const result = allTasks.filter((task) => currentTask.id !== task.id);
    setallTasks([...result]);
  };

  const addTask = (e) => {
    e.preventDefault();
    console.log("adding task", task);

    if (task.title === "") {
      seterror("Task can not be empty");
    } else {
      let tempTasks = [...allTasks, task];
      console.log(tempTasks);
      setallTasks([...tempTasks]);
      settask({ id: Date.now(), title: "", isCompleted: false });
      if (error !== "") seterror("");
      console.log(allTasks);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <div>
        <span className={styles.errorMessage}> {error} </span>
      </div>

      <div>
        <AllTasks
          allTasks={allTasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        ></AllTasks>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.taskForm} onSubmit={(e) => addTask(e)}>
          <input
            className={styles.taskInput}
            name="task"
            type="text"
            value={task.title}
            placeholder="Add Task"
            onChange={(e) =>
              settask({
                id: Date.now(),
                title: e.target.value,
                isCompleted: false,
              })
            }
          ></input>

          <button className={styles.addTaskbutton}>Add Task</button>
        </form>
      </div>
    </div>
  );
}
