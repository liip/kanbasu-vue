import { shallowMount } from '@vue/test-utils';
import Btn from './Btn.vue';

describe('Btn.vue', () => {
  it('renders as button with type by default', () => {
    const wrapper = shallowMount(Btn);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as input with type submit', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        tag: 'input',
        type: 'submit',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as anchor without type', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        tag: 'a',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with variant', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        variant: 'primary',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as block', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        block: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as disabled', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as disabled with custom class', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        disabled: true,
        disabledClass: 'disabled',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without disabled attribute on anchors', () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        tag: 'a',
        disabled: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
