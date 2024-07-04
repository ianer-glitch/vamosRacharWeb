<script setup lang="ts">
import { ref } from 'vue';

export interface IIcon{
  name : string,
  isPrimeIcon:boolean,
}

const props = withDefaults(defineProps<IIcon>(),{
 isPrimeIcon:true,
})

let iconPath = ref(props.name)

</script>

<template>
  <i :class="props.name" v-if="isPrimeIcon"></i>
  <img :src="iconPath" v-else>
  
</template>

<style scoped></style>
