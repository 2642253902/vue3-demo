<template>
    <p>新闻ID:{{ query.id }}</p>
    <p>新闻ID:{{ query.title }}</p>
    <p>新闻ID:{{ query.content }}</p>
</template>
<script lang="ts" setup>
import { toRef } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
console.log(route.query);

let query = toRef(route, 'query');

</script>
<style scoped></style>