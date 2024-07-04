<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue';
import Icon from '../atoms/Icon.vue';
 const a = ref(false)

</script>

<template>
    <header>
        <Icon name="pi pi-th-large"/>
        <Coin/>
        <Icon name="pi pi-history"/>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    height: 64px;
    background-color: var(--bg-color-3);
    display: flex;

    align-items: center;
    justify-content: space-between;
    color:var(--bg-color-1);

    padding: 2rem;
}
</style>