<template>
  <div>
    <MySalarinfo :salary-info="salaryInfo"></MySalarinfo>
    <!-- 你没有在 <MySalarinfo> 上用 ref 绑定子组件实例。
                <MySalarinfo></MySalarinfo>
这样写，根本没有告诉 Vue 要把这个子组件的引用放到 salaryInfo 里，所以 salaryInfo.value 是 undefined。 -->
    <button @click="showRes">薪水修改</button>
  </div>
</template>

<script lang="ts" setup>

import MySalarinfo from "@/components/MySalarinfo.vue"
import { reactive, ref } from "vue";

let salaryInfo = reactive({
  username: "roy",
  salary: 10000
})

function showRes() {
  salaryInfo.salary += 1000;
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
