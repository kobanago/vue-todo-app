<script setup lang="ts">
defineEmits(['addTodo']);
</script>
<template>
  <v-btn class="mx-1" type="button" @click="$emit('addTodo')">追加</v-btn>
</template>
