import { shallowMount } from '@vue/test-utils';
import Media from './Media.vue';

describe('Media.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Media, {
      slots: {
        default: 'slot',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(Media, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with alignment', () => {
    const wrapper = shallowMount(Media, {
      propsData: {
        align: 'middle',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as responsive', () => {
    const wrapper = shallowMount(Media, {
      propsData: {
        responsive: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
