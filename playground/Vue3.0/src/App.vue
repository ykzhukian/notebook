<template>
  <div id="app">
    count: {{ count }}
  </div>
  <div>state.time: {{ state.time }}</div>
  <div>double: {{ double }}</div>
  <button @click="handleClick">
    add
  </button>
  <Button>默认按钮</Button>
</template>

<script>
import {
  onMounted,
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
} from 'vue';

import Button from './components/Button.vue';

// 函数组件，从原生命周期抽离出共用的逻辑，本质是函数，容易复用
const sayHello = () => {
  onMounted(() => {
    console.log('hello');
  });
};

export default defineComponent({
  name: 'App',
  components: {
    Button,
  },
  setup() {
    sayHello();

    // 创建响应式对象的方式
    // 3点
    // ref
    // 值类型
    const count = ref(0);
    console.log('count', count);

    // reactive / readonly
    // {} [] 引用类型
    const state = reactive({ time: 0 });
    console.log('state', state);

    const handleClick = () => {
      count.value++;
      state.time++;
    };

    // 响应式系统 api
    // computed
    const double = computed(() => count.value * 2);

    // 监听double
    watch(double, (value) => {
      console.log('watch double', value);
    });

    return {
      count,
      state,
      double,
      handleClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
