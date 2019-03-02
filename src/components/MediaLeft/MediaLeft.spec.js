import { shallowMount } from '@vue/test-utils';
import MediaLeft from './MediaLeft.vue';

describe('MediaLeft.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MediaLeft, {
      slots: {
        default: 'slot',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
