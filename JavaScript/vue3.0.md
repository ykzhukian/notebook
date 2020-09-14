#### 认识 Vue3
- Performance 比 Vue2 runtime 快了2倍
  - 重写了虚拟 dom 的实现
  - 编译模板的优化（运行时编译）
  - update 性能提高 （在编译时给到需要更新的信息，render中_createVNode的传参，把动态的标记为 PROPS）
  - SSR 速度提高
- Tree Shaking 按需编译代码
- TS Support
- Composition Api
- Customer Render API 自定义渲染器
- 内置新特性组件

#### 按需编译代码 （从 Vue 中到处函数来用）

#### 用  TypeScript 重写

#### [ESlint Vue3.x](https://eslint.vuejs.org/rules)

```js
extends: [
  'airbnb',
  'plugin:vue/vue3-essential',
  'plugin:vue/vue3-strongly-recommended',
],
```

VSCode 的 vetur 暂时还不支持 Vue3 或者我哪里配的不对，它总是强行把 Vue2.x 的 lint 给我过一遍，所以就，
`settings.json` 里：

```json
"vetur.validation.template": false,
```

#### Fragment
```js
<template>
  <div>1</div>
  <div>2</div>
</template>
```

#### Composition API
- 更好的逻辑服用与代码组织
- 更好的类型推导（函数对类型友好）

通过类型来组织代码，`Options API`，当代码量小的时候很友好，但代码量大时很难维护，反复横跳，一个功能被拆分到很多地方。

`Composition API` 解决了这个难题。同事也解决 `Mixin` 带来的副作用。本质是函数。

```js
// 函数组件，从原生命周期抽离出共用的逻辑，本质是函数，容易复用
const sayHello = () => {
  onMounted(() => {
    console.log('hello');
  });
};

export default defineComponent({
  setup() {
    sayHello()

    // 创建响应式对象的方式
    // 3点
    // ref
    // 值类型
    const count = ref(0)
    console.log('count', count);

    // reactive / readonly
    // {} [] 引用类型
    const state = reactive({ time: 0 })
    console.log('state', state);

    const handleClick = () => {
      count.value++
      state.time++
    }

    // 响应式系统 api
    // computed
    const double = computed(() => {
      return count.value * 2
    })

    // 监听double
    watch(double, (value) => {
      console.log('watch double', value);
    })


    return {
      count,
      state,
      double,
      handleClick,
    }
  }
})
```

#### Vue Test Utils Next（VTU） 单元测试
##### 测试功能，不是测试细节。
一个组件：
- 输入 -> props / 用户交互
- 输出 -> dom渲染 / Events（emit）

例子：[button.spec.js](playground/Vue3.0/__tests__/button.spec.js)



#### Custom Render API
自定义渲染，用户可自定义渲染目标平台（比如Canvas）
