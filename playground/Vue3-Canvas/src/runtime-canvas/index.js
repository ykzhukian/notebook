import { createRenderer } from '@vue/runtime-core'
import { Graphics } from 'pixi.js'

// 自定义渲染器
// Custom Render API
const renderer = createRenderer({
  createElement(type) { // type：虚拟节点的类型
    console.log(type)
    // 创建一个 矩形
    // pixijs
    // api -> 文档
    let element
    if (type === 'rect') {
      element = new Graphics()
      element.beginFill(0xff0000)
      element.drawRect(0, 0, 500, 500)
      element.endFill()
    } else if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xfff000)
      element.drawCircle(0, 0, 50)
      element.endFill()
    }

    return element
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  patchProp(el, key, preVal, nextVal) {
    el[key] = nextVal
  }
})

export const createApp = (rootComponent) => {
  // 源码 做了很多事情
  return renderer.createApp(rootComponent)
}
