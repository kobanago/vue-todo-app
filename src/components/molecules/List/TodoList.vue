<script setup lang="ts">
import type { Todos } from '@/types';
import { type ComputedRef, computed } from 'vue';

type Props = {
  todos: Todos[];
  isDoneShowFlg: boolean;
};
const props: Props = defineProps<Props>();
const usedForShowTask: ComputedRef<Todos[]> = computed(() => {
  return props.isDoneShowFlg ? props.todos : props.todos.filter((todo: Todos) => !todo.done);
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
