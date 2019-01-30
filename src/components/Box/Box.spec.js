import { shallowMount } from '@vue/test-utils';
import Box from './Box.vue';

describe('Box.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Box);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with variant', () => {
    const wrapper = shallowMount(Box, {
      propsData: {
        variant: 'primary',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(Box, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
