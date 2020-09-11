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

#### Fragment
```js
<template>
  <div>1</div>
  <div>2</div>
</template>
```

#### Custom Render API
自定义渲染，用户可自定义渲染目标平台（比如Canvas）

#### Composition API
- 更好的逻辑服用与代码组织
- 更好的类型推导（函数对类型友好）

通过类型来组织代码，`Options API`，当代码量小的时候很友好，但代码量大时很难维护，反复横跳，一个功能被拆分到很多地方。

`Composition API` 解决了这个难题。同事也解决 `Mixin` 带来的副作用。本质是函数。

```js
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
一个组件：
- 输入 -> props / 用户交互
- 输出 -> dom渲染 / Events（emit）

测试功能，不是测试细节。









#### ESlint V3.x
[https://eslint.vuejs.org/rules]