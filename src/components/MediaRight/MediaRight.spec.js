import { shallowMount } from '@vue/test-utils';
import MediaRight from './MediaRight.vue';

describe('MediaRight.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MediaRight, {
      slots: {
        default: 'slot',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
