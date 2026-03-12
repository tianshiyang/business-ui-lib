<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useChildren } from '~/utils/testUseRelation/useChildren';
import { TAB_KEY } from '.';
defineOptions({
  name: 'MyTabs',
})  

defineModel()
useChildren(TAB_KEY)
</script>