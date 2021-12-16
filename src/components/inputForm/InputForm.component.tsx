import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "app/hooks";
import { addItem } from "slices/todoSlice";
import styles from "./InputForm.module.css";

export const InputForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef?.current || !inputRef?.current) return;

    const id = uuidv4();
    const createdAt = new Date().toString();
    const text = inputRef.current.value;

    if (text.trim()) dispatch(addItem({ id, text, createdAt }));
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className={styles.input_form}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
};
