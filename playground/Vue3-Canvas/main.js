// import { createApp } from 'vue'
// import App from './App.vue'
// App -> vnode -> 渲染成真实的 element dom -> mount 挂载到根容器上
// createApp(App).mount('#root')

import { createRenderer } from '@vue/runtime-core'
import App from './src/App'
import { Application }  from 'pixi.js'

// 渲染器
const renderer = createRenderer({})

// 根组件 App
// 根容器 canvas
// canvas -> canvas api 难用 太底层 -> pixijs 引擎库 (egret)

// 初始化一个canvas
const game = new Application({
  width: 750,
  height: 1080,
})

document.body.append(game.view)

// game.stage 是一个容器
renderer.createApp(App).mount(game.stage)
