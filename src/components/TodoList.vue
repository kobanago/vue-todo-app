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
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="text-center">ToDoリスト</h1>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field v-model="text" hide-details="auto" label="タスク"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn class="mx-1" type="button" @click="handleClickAddTask">追加</v-btn>
      <v-btn
        class="mx-1"
        type="button"
        :flg="isDoneShowFlg"
        @click="isDoneShowFlg = !isDoneShowFlg"
      >
        完了済みを{{ isDoneShowFlg ? '非表示' : '表示' }}
      </v-btn>
    </v-col>
  </v-row>
  <v-card class="ma-4" max-width="300">
    <v-list
      v-for="(todo, index) in isDoneShowFlg ? todos : todos.filter((todo) => !todo.done)"
      :key="index"
      :class="{ 'todo-done': todo.done }"
    >
      {{ todo.value }}
      <input v-model="todo.done" type="checkbox" />
    </v-list>
  </v-card>
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
