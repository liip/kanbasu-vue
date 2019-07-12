import { shallowMount } from '@vue/test-utils';
import Container from './Container.vue';

describe('Container.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Container);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with variant', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        variant: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
