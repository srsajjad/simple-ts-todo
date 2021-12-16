export interface ItemProps {
  id: string;
  text: string;
  createdAt: string;
}

export interface TodoState {
  value: ItemProps[];
}
