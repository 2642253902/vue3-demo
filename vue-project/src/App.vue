<template>
  <div>
    姓名：<input v-model="username" />{{ username }} <br />
    薪水：<input type="number" v-model="salary" />{{ salary }} <br />
    <button v-on:click="addsalary">提交</button> <button @click="changeUserInfo">查看个人信息</button>
    <hr />
    <div class="userInfo" v-if="showUserInfo">
      <h2>个人信息 </h2>
      <p>年龄：<input type="numer" v-model="userInfo.age"></p>
      <p>性别：<input type="radio" value="1" v-model="userInfo.sex">男<input type="radio" value="2" v-model="userInfo.sex">女
      </p>
      <P>岗位
        <select v-model="userInfo.department">
          <option value="dev">开发</option>
          <option value="test">测试</option>
          <option value="maintain">运维</option>
        </select>
      </P>
      <p>技术： <span v-for="item in userInfo.skills" v-bind:key="item">{{ item }}</span> </p>
      <p>新技术：<input v-model="newSkill" /><button @click="learNewSkill"> 学习新技术 </button> </p>
      <p>个人技术汇总 {{ userInfo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: 'roy',
      salary: 15000,
      userInfo: {
        age: 25,
        sex: 1,
        department: '',
        skills: ["Java", "Python", "Vue"]
      },
      newSkill: '',
      showUserInfo: true
    };
  },
  methods: {
    addsalary() {
      this.salary += 1000;
      console.log('薪水增加了1000');

    },
    learNewSkill() {
      if (this.newSkill) {
        this.userInfo.skills.push(this.newSkill);
      }
    },
    changeUserInfo() {
      this.showUserInfo = !this.showUserInfo;
    }
  }
};

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
