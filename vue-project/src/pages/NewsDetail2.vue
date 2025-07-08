<template>
    <p>新闻ID:2</p>
    <p>新闻ID:2</p>
    <p>新闻ID:sadasdasdasd</p>
</template>
<script lang="ts" setup>
import { toRef } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
console.log(route.params);

</script>
<style scoped></style>