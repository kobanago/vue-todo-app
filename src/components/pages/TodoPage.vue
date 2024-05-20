<script setup lang="ts">
import ExecuteTodoList from '@/components/molecules/Form/ExecuteTodoList.vue';
import TodoList from '@/components/molecules/List/TodoList.vue';
import type { Todos } from '@/types';
import { type Ref, provide, ref } from 'vue';

const todos: Ref<Todos[]> = ref([
  { id: 1, value: 'Vueをマスターする', done: true },
  { id: 2, value: '牛乳を買う', done: false },
  { id: 3, value: '家賃を払う', done: false },
]);
const isDoneShowFlg: Ref<boolean> = ref(true);
const addTodo = (newTask: string) => {
  todos.value.push({ id: todos.value.length + 1, value: newTask, done: false });
};
const switchDoneShow = () => {
  isDoneShowFlg.value = !isDoneShowFlg.value;
};
provide('todoContext', { todos, isDoneShowFlg });
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="text-center">ToDoリスト</h1>
    </v-col>
  </v-row>
  <ExecuteTodoList @add-todo="addTodo" @switch-done-show="switchDoneShow" />
  <TodoList />
</template>

<style>
body {
  background-color: #eee;
}
</style>
