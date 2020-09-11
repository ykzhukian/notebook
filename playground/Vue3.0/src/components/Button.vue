<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomButton',
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click', 1);
    };
    return {
      handleClick,
    };
  },
});
</script>
