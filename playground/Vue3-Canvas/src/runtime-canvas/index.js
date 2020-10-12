import { createRenderer } from '@vue/runtime-core'

// 渲染器
const renderer = createRenderer({})

export const createApp = (rootComponent) => {
  // 源码 做了很多事情
  return renderer.createApp(rootComponent)
}
