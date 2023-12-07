import styles from "../styles/Header.module.css";
import { AiFillHome } from "react-icons/ai";
const Header = () => {
  const getDay = () => {
    let day = date.getDay();
    if (day === 0) {
      return "Monday";
    }
    if (day === 1) {
      return "Tuesday";
    }
    if (day === 2) {
      return "Wednesday";
    }
    if (day === 3) {
      return "Thursday";
    }
    if (day === 4) {
      return "Friday";
    }
    if (day === 5) {
      return "Saturday";
    }
    if (day === 6) {
      return "Sunday";
    }
  };

  const date = new Date();
  const currentDate = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const currentDay = getDay();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <AiFillHome />
      </div>

      <div className={styles.header}>
        <span>TASK</span>
        <div className={styles.currentDay}>
          <span> {currentDate} </span> / <span> {month} </span> /{" "}
          <span> {year} </span> , <span> {currentDay}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
