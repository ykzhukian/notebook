import { mount } from '@vue/test-utils';
import Button from '../src/components/Button.vue';

describe('Button', () => {
  it('content', () => {
    // given
    // 准备数据
    const Comp = {
      template: '<div><Button>默认按钮</Button></div>',
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
        },
      },
    });

    expect(wrapper.findComponent({ name: 'CustomButton' }).text()).toBe('默认按钮');
  });

  it('emit click event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toEqual([[1]]);
  });
});
