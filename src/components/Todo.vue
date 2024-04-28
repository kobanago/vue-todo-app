<script setup lang="ts">
import { ref } from 'vue';
const todos = ref([
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
const text = ref('');
const isDoneShowFlg = ref(true);
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
    <input type="text" placeholder="入力してください" v-model="text" />
    <button type="button" @click="handleClickAddTask">追加</button>
    <button type="button" @click="isDoneShowFlg = !isDoneShowFlg" :flg="isDoneShowFlg">
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
      <input type="checkbox" v-model="todo.done" />
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
