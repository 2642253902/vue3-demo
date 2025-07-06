<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 路由链接 -->
      <RouterLink to="/home">首页</RouterLink> <!--字符串跳转-->
      <RouterLink :to="{ path: 'about' }">关于</RouterLink> <!--对象跳转-->
      <RouterLink replace :to="{ name: 'new' }">新闻</RouterLink> <!--具名跳转-->
    </p>
    <div class="content">
      <!-- 路由出口 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style>
a {
  margin: 50px;
}

.content {
  background: yellowgreen;
  width: 400px;
  height: 400px;
  border: 5px solid #ccc;
  border-radius: 10px;
}
</style>