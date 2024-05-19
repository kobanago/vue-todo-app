<script setup lang="ts">
type Props = {
  isDoneShowFlg: boolean;
};
const props: Props = defineProps<Props>();
defineEmits(['switchDoneShow']);
</script>

<template>
  <v-btn class="mx-1" type="button" :flg="props.isDoneShowFlg" @click="$emit('switchDoneShow')">
    完了済みを{{ props.isDoneShowFlg ? '非表示' : '表示' }}
  </v-btn>
</template>
