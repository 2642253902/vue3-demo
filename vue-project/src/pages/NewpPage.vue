<template>
    <ul>
        <li>
            <RouterLink to="/new/1?id=1&title=新闻1&content=这是新闻1的内容"> 新闻1 </RouterLink>
        </li>

        <li>
            <RouterLink :to="{ path: '/new/1', query: { id: 1, title: '新闻1', content: '这是新闻1的内容' } }"> 新闻1 </RouterLink>
        </li>

        <li>
            <RouterLink to="/new/2/2/新闻2/这是新闻114567的内容"> 新闻2 </RouterLink>
        </li>

        <li>
            <RouterLink :to="{ name: 'news2', params: { id: 2, title: '新闻2', content: '这是新闻123123123的内容' } }"> 新闻2
            </RouterLink>
        </li>

    </ul>
    <div class="news-content">
        <router-view></router-view>
    </div>

</template>
<script setup lang="ts">

import { RouterLink } from 'vue-router';

</script>
<style>
.news-content {
    background-color: yellow;
    height: 90%;
}
</style>