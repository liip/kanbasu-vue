import { shallowMount } from '@vue/test-utils';
import ListStacked from './ListStacked.vue';

describe('ListStacked.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ListStacked);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(ListStacked, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with dividers', () => {
    const wrapper = shallowMount(ListStacked, {
      propsData: {
        divided: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
