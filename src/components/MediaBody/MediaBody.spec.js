import { shallowMount } from '@vue/test-utils';
import MediaBody from './MediaBody.vue';

describe('MediaBody.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MediaBody, {
      slots: {
        default: 'slot',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
