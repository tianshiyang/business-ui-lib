<template>
   <div :class="parentModelValue === props.name ? 'active' : ''" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useParent } from '~/utils/testUseRelation/useParent';
import { TAB_KEY } from '.';
import { computed } from 'vue';

defineOptions({
  name: 'MyTabItem',
})

const props = defineProps<{
  name: string
}>()

const parent = useParent(TAB_KEY)
const parentModelValue = computed(() => parent!.props.modelValue)

const handleClick = () => {
  parent!.props.modelValue = props.name
}

</script>

<style scoped lang="scss">
.active {
  color: red;
}
</style>