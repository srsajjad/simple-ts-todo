import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ItemProps, TodoState } from "app/interfaces";

const initialState: TodoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemProps>) => {
      state.value.push(action.payload);
    },

    updateItem: (state, action: PayloadAction<ItemProps>) => {
      const item = state.value.find((i) => i.id === action.payload.id);
      if (item) {
        item.text = action.payload.text;
      }
    },

    removeItem: (state, action: PayloadAction<ItemProps>) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const { addItem, updateItem, removeItem } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.value;

export default todoSlice.reducer;
