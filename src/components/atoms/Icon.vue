<script setup lang="ts">
import { ref } from 'vue';

export interface IIcon{
  name : string,
}

const props = defineProps<IIcon>()

let src = ref('')

</script>

<template>
  <img src="src" />
</template>

<style scoped></style>
