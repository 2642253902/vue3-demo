<template>
  <div>
    姓名：<input v-model="username" />{{ username }} <br />
    薪水：<input type="number" v-model="salary" />{{ salary }} <br />
    <button v-on:click="addsalary">提交</button>
  </div>
</template>

<script lang="ts" setup>

import { reactive, ref, toRef, toRefs } from 'vue'

let salaryInfo = reactive({ username: 'roy', salary: 10000 })
// let username = salaryInfo.username
// let salary = salaryInfo.salary

// let username = toRef(salaryInfo, 'username')
// let salary = toRef(salaryInfo.salary)

let { username, salary } = toRefs(salaryInfo)

function addsalary() {
  salary.value += 10000
  console.log(salaryInfo)
}

</script>


<style scoped>
.userInfo {
  background-color: aqua;
  widows: 80%;
}

.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
</style>
