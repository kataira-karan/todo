import styles from "../styles/Task.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Task = ({ task, completeTask, deleteTask }) => {
  return (
    <div className={styles.taskContainer} key={task.title}>
      <div> {task.title} </div>

      <div className={styles.buttonContainer}>
        {task.isCompleted ? (
          <button
            className={styles.completedButton}
            onClick={(e) => completeTask(task)}
          >
            {" "}
            Not Complete yet{" "}
          </button>
        ) : (
          <button
            className={styles.completedButton}
            onClick={(e) => completeTask(task)}
          >
            {" "}
            Complete{" "}
          </button>
        )}

        <RiDeleteBin6Line onClick={(e) => deleteTask(task)} />
      </div>
    </div>
  );
};

export default Task;
