<template>
    姓名：<input v-model="salaryInfo.username" /><br />
    薪水：<input type="number" v-model="salaryInfo .salary" /><br />
    {{ salaryInfo }}

</template>


<script lang="ts">
export default {
    name: 'SalaryInfo',
}
</script>

<script setup lang="ts">
import type { SalaryInfo } from "@/components/types/salaryInfo";


defineProps <{ salaryInfo :SalaryInfo}>() 
</script>

<style scoped></style>