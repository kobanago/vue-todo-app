<script setup lang="ts">
import { type Ref, ref } from 'vue';

type Todos = {
  value: string;
  done: boolean;
};

const todos: Ref<Todos[]> = ref([
  {
    value: 'Vueをマスターする',
    done: true,
  },
  {
    value: '牛乳を買う',
    done: false,
  },
  {
    value: '家賃を払う',
    done: false,
  },
]);
const text: Ref<string> = ref('');
const isDoneShowFlg: Ref<boolean> = ref(true);
const handleClickAddTask = () => {
  if (!text.value) {
    alert('タスクを入力してください');
    return;
  }
  todos.value.push({ value: text.value, done: false });
  text.value = '';
};
</script>

<template>
  <h1>Users Data</h1>
  <div>
    <input v-model="text" type="text" placeholder="入力してください" />
    <button type="button" @click="handleClickAddTask">追加</button>
    <button type="button" :flg="isDoneShowFlg" @click="isDoneShowFlg = !isDoneShowFlg">
      完了済みを{{ isDoneShowFlg ? '非表示' : '表示' }}
    </button>
  </div>
  <ul>
    <li
      v-for="(todo, index) in isDoneShowFlg ? todos : todos.filter((todo) => !todo.done)"
      :key="index"
      :class="{ 'todo-done': todo.done }"
    >
      {{ todo.value }}
      <input v-model="todo.done" type="checkbox" />
    </li>
  </ul>
</template>

<style>
body {
  background-color: #eee;
}

.todo-done {
  text-decoration: line-through;
}
.todo-delete {
  display: none;
}
</style>
