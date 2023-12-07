import { useEffect } from "react";
import styles from "../styles/AllTasks.module.css";
import Task from "./Task";

const TaskList = ({ allTasks, completeTask, deleteTask }) => {
  useEffect(() => {
    console.log(allTasks);
  }, []);

  return (
    <div className={styles.allTasksContainer}>
      {allTasks.length !== 0
        ? allTasks.map((task) => {
            return (
              <Task
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              ></Task>
            );
          })
        : "No task to display"}
    </div>
  );
};

export default TaskList;
