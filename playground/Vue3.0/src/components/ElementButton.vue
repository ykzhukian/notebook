<template>
  <button
    @click="handleClick"
    :class="[
      size ? 'size--' + size : ''
    ]"
  >
    <slot />
  </button>
</template>
<script>
import {
  computed,
  defineComponent,
  inject,
  toRefs,
  unref,
  getCurrentInstance,
} from 'vue';

const useDisabled = (disabled) => {
  // 关于功能点拆分
  const elForm = inject('elForm', {});
  const buttonDisabled = computed(() => disabled || elForm.disabled);

  return buttonDisabled;
};

const useSize = (size) => {
  // size
  const elFormItem = inject('elFormItem', {});
  // 响应式对象 -> ref | 不是一个响应式对象
  // if (!) 取它本身的值
  // 程序的健壮性
  const elFormItemSize = computed(() => unref(elFormItem.elFormItemSize));

  const buttonSize = computed(() => (
    size.value
        || elFormItemSize
        || (getCurrentInstance().ctx.$ELEMENT || {}).size
  ));

  return buttonSize;
};

export default defineComponent({
  name: 'ElementButton',
  props: {
    size: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  // 1. props, 2. ctx
  setup(props, { emit }) {
    // 响应式数据丢失的问题
    // props.size -> 'mini'
    // ref 响应式对象
    const { disabled, size } = toRefs(props);

    const handleClick = () => {
      emit('click', 1);
    };

    const buttonDisabled = useDisabled(disabled);
    const buttonSize = useSize(size);

    return {
      handleClick,
      buttonDisabled,
      buttonSize,
    };
  },
});
</script>
