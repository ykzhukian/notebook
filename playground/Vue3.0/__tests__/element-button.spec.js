import { mount } from '@vue/test-utils';
import ElementButton from '../src/components/ElementButton.vue';

// 开发组件前先列举要实现的功能，先写测试，后开发：TDD
// - 可以显示 slot 的内容
// - 设置 size
// - 设置 type
// - 是否 圆角、plain、disabled、...

describe('Button', () => {
  // 可以显示 slot 的内容
  it('content', () => {
    // given
    // 准备数据
    const Comp = {
      template: '<ElementButton>TDD按钮</ElementButton>',
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          ElementButton,
        },
      },
    });

    expect(wrapper.findComponent({ name: 'ElementButton' }).text()).toBe('TDD按钮');
  });

  // 设置 size
  it('size', () => {
    const wrapper = mount(ElementButton, {
      props: {
        size: 'mini',
      },
    });

    expect(wrapper.classes()).toContain('size--mini');
  });

  // it('emit click event', () => {
  //   const wrapper = mount(ElementButton);
  //   wrapper.trigger('click');
  //   expect(wrapper.emitted('click')).toEqual([[1]]);
  // });
});
