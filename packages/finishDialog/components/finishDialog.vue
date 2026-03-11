<template>
  <el-dialog v-model="modelValue" title="登录">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="formData.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" type="password" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, type PropType } from "vue";
import type { FinishDialogSubmitPayload, FinishDialogType } from "../types/index"
import { userLoginAPI } from '../../api'

defineOptions({
  name: 'FinishDialog',
})

const emit = defineEmits<{
  (e: "submit", payload: FinishDialogSubmitPayload): void,
  (e: "cancel"): void
}>()

const props = defineProps({
  type: {
    type: String as PropType<FinishDialogType>,
    default: 'login'
  }
})
const modelValue = defineModel()

const formData = reactive<FinishDialogSubmitPayload>({
  username: '',
  password: ''
})

const handleSubmit = async () => { 
  modelValue.value = false
  const res = await userLoginAPI({
    username: formData.username,
    password: formData.password
  })
  console.log(res)
  emit("submit", {
    username: formData.username,
    password: formData.password
  })
}

const handleCancel = () => {
  modelValue.value = false
  emit("cancel")
}
</script>

<style lang="scss" scoped></style>