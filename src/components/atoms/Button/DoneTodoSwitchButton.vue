<script setup lang="ts">
import type { TodoContext } from '@/types';
import { inject } from 'vue';

defineEmits(['switchDoneShow']);

const todoContext: TodoContext | undefined = inject('todoContext');
if (!todoContext) {
  throw new Error('todoContext is not provided');
}
const { isDoneShowFlg }: TodoContext = todoContext;
</script>

<template>
  <v-btn class="mx-1" type="button" :flg="isDoneShowFlg" @click="$emit('switchDoneShow')">
    完了済みを{{ isDoneShowFlg ? '非表示' : '表示' }}
  </v-btn>
</template>
