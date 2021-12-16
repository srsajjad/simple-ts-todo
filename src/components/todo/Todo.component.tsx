import { TodoList, InputForm } from "components";
import styles from "./Todo.module.css";

export const Todo = () => (
  <div className={styles.todo}>
    <h1>Todo App</h1>
    <InputForm />
    <TodoList />
  </div>
);
