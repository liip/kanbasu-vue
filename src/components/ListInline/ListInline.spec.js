import { shallowMount } from '@vue/test-utils';
import ListInline from './ListInline.vue';

describe('ListInline.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ListInline);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(ListInline, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with alignment', () => {
    const wrapper = shallowMount(ListInline, {
      propsData: {
        align: 'center',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with dividers', () => {
    const wrapper = shallowMount(ListInline, {
      propsData: {
        divided: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
