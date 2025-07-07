<template>
  <div id="app">
    <h1>Hello App! {{ userInfo.username.value }}</h1>

  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/user"
import { toRefs } from "vue"
import { storeToRefs } from "pinia"

const user = userStore()

// user.username = "roy"

// user.$patch({
//   username: 'roy2'
// })

user.changeUsername('666')

console.log(user.username)
console.log(user.getUsername)

const userInfo = storeToRefs(user)

console.log(userInfo)

</script>
<style></style>