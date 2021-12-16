import { useState, useRef } from "react";
import { ItemProps } from "app/interfaces";
import { removeItem, updateItem } from "slices/todoSlice";
import { useAppDispatch } from "app/hooks";
import styles from "./Item.module.css";

interface ItemComponentProps {
  item: ItemProps;
}

export const Item = ({ item }: ItemComponentProps) => {
  const [editing, setEditing] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleEdit = () => setEditing(!editing);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef?.current) return;

    const text = inputRef.current.value;
    if (text.trim()) dispatch(updateItem({ ...item, text }));
    handleEdit();
  };

  const handleDelete = () => dispatch(removeItem(item));

  const dateTokens = new Date(item.createdAt).toString().split(" ").slice(0, 5);

  return (
    <li>
      {!editing && (
        <div className={styles.list_item}>
          <h3>{item.text}</h3>
          <p>{dateTokens.join(" ")}</p>

          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}

      {editing && (
        <form onSubmit={handleSubmit} className={styles.list_item}>
          <input defaultValue={item.text} ref={inputRef} />
          <button type="submit">Submit</button>
          <button onClick={handleEdit}>Cancel</button>
        </form>
      )}
    </li>
  );
};
