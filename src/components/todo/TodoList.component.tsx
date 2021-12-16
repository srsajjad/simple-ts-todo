import { useAppSelector } from "app/hooks";
import { ItemProps } from "app/interfaces";
import { Item } from "components/item/Item.component";
import { selectTodo } from "slices/todoSlice";
import styles from "./Todo.module.css";

export const TodoList = () => {
  const todoList = useAppSelector(selectTodo);

  const sortTodo = (a: ItemProps, b: ItemProps) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

  return (
    <ul className={styles.todo_list}>
      {todoList
        .slice()
        .sort(sortTodo)
        .map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </ul>
  );
};
