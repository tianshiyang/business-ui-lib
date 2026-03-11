<script setup lang="ts">
import type { DialogType } from '../types'
import { ref } from 'vue'

defineOptions({
  name: 'FinishLoginDialog',
})

withDefaults(defineProps<{
  type: DialogType
}>(), {
  type: 'login',
})

const model = defineModel<boolean>({ default: false })

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', payload: { username: string; password: string }): void
}>()

const username = ref('')
const password = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  if (loading.value) return
  loading.value = true
  try {
    emit('submit', {
      username: username.value.trim(),
      password: password.value,
    })
  } finally {
    loading.value = false
  }
}

const handleClose = () => {
  emit('close')
  model.value = false
}
</script>

<template>
  <el-dialog
    v-model="model"
    title="登录"
    :show-close="true"
    :close-on-click-modal="false"
    width="400px"
    @close="handleClose"
  >
    <div class="login-dialog__body">
      <el-form label-position="top">
        <el-form-item label="用户名">
          <el-input
            v-model="username"
            autocomplete="username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="password"
            type="password"
            show-password
            autocomplete="current-password"
            placeholder="请输入密码"
          />
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <div class="login-dialog__footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="handleSubmit"
        >
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.login-dialog__body {
  padding-top: 8px;
}

.login-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>

