import type { Ref } from 'vue';

export type Todos = {
  id: number;
  value: string;
  done: boolean;
};
export type TodoContext = {
  todos: Ref<Todos[]>;
  isDoneShowFlg: Ref<boolean>;
};
