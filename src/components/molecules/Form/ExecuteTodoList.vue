<script setup lang="ts">
import AddTodoButton from '@/components/atoms/Button/AddTodoButton.vue';
import DoneTodoSwitchButton from '@/components/atoms/Button/DoneTodoSwitchButton.vue';
import { type Ref, ref } from 'vue';

type Emits = {
  (event: 'addTodo', newTask: string): void;
  (event: 'switchDoneShow'): void;
};

const emit: Emits = defineEmits(['addTodo', 'switchDoneShow']);
const task: Ref<string> = ref('');
const addTodo = () => {
  if (!task.value) {
    alert('タスクを入力してください');
    return;
  }
  emit('addTodo', task.value);
  task.value = '';
};
const switchDoneShow = () => emit('switchDoneShow');
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field v-model="task" hide-details="auto" label="タスク"></v-text-field>
    </v-col>
    <v-col cols="12">
      <AddTodoButton @add-todo="addTodo" />
      <DoneTodoSwitchButton @switch-done-show="switchDoneShow" />
    </v-col>
  </v-row>
</template>
