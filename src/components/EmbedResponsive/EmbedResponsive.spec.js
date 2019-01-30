import { shallowMount } from '@vue/test-utils';
import EmbedResponsive from './EmbedResponsive.vue';

describe('EmbedResponsive.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(EmbedResponsive, {
      slots: {
        default: '<iframe src="#"></iframe>',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('EmbedResponsive.vue', () => {
  it('renders with custom ratio', () => {
    const wrapper = shallowMount(EmbedResponsive, {
      slots: {
        default: '<iframe src="#"></iframe>',
      },
      propsData: {
        ratio: 4 / 3,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
