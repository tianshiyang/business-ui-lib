<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)

const handleSubmit = (payload: { username: string; password: string }) => {
  console.log(payload)
}

const handleClose = () => {
  visible.value = false
}

const tabsModelValue = ref('first')
</script>

<template>
  <el-button @click="visible = true" >点击打开登录弹窗</el-button>

  <MyTabs v-model="tabsModelValue">
    <MyTabItem name="first">第一个</MyTabItem>
    <MyTabItem name="second">第二个</MyTabItem>
    <MyTabItem name="third">第三个</MyTabItem>
  </MyTabs>

  <FinishDialog type="login" v-model="visible" @submit="handleSubmit" @close="handleClose" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
