import { defineComponent, h } from '@vue/runtime-core'
// .vue -> .js
// render -> template -> render
// 底层的写法

export default defineComponent({

  // template
  redner() {
    // <div></div> 的虚拟 DOM
    const vnode = h('div')

    console.log('vnode', vnode);
  }
})
