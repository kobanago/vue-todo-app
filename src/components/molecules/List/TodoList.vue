<script setup lang="ts">
import type { TodoContext, Todos } from '@/types';
import { type ComputedRef, computed, inject } from 'vue';

const todoContext: TodoContext | undefined = inject('todoContext');
const usedForShowTask: ComputedRef<Todos[]> = computed(() => {
  if (!todoContext) throw new Error('todoContext is not provided');
  const { todos, isDoneShowFlg }: TodoContext = todoContext;
  return isDoneShowFlg.value ? todos.value : todos.value.filter((todo: Todos) => !todo.done);
});
</script>

<template>
  <v-card class="ma-4" max-width="300">
    <v-list v-for="todo in usedForShowTask" :key="todo.id" :class="{ 'todo-done': todo.done }">
      {{ todo.value }}
      <input v-model="todo.done" type="checkbox" />
    </v-list>
  </v-card>
</template>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
