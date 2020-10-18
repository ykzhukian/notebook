// import { createApp } from 'vue'
// import App from './App.vue'
// App -> vnode -> 渲染成真实的 element dom -> mount 挂载到根容器上
// createApp(App).mount('#root')

import App from './src/App'
import { createApp } from './src/runtime-canvas'
import { getRootContainer } from './src/game'

// h() -> vnode -> 生成真实的 element（dom、canvas）-> 添加到根容器内
createApp(App).mount(getRootContainer())

// 总结：
// 1. 通过 vue/runtime-core 导出 createRenderer，来创建自定义渲染器
// 2. 创建根容器
