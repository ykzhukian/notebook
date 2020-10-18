import { defineComponent, h } from '@vue/runtime-core'
import Circle from './components/Circle'
// .vue -> .js
// render -> template -> render
// 底层的写法

export default defineComponent({

  // template
  render() {
    // 虚拟 DOM
    // <react x={100} y={100}></react>
    const vnode = h('rect', { x: 100, y: 100 }, [
      h(Circle)
    ])

    console.log('vnode', vnode)
    return vnode
  }
})
