<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyTabs',
})  

defineModel()

import { useChildren } from '~/utils/testUseRelation/useChildren';
import { TAB_KEY } from '.';
useChildren(TAB_KEY)
</script>