<script setup lang="ts">
import { ref } from 'vue'
import FinishDialog from '~/finishDialog/components/finishDialog.vue'

const visible = ref(false)

const handleSubmit = (payload: { username: string; password: string }) => {
  console.log(payload)
}

const handleClose = () => {
  visible.value = false
}
</script>

<template>
  <el-button @click="visible = true" >点击打开登录弹窗</el-button>

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
