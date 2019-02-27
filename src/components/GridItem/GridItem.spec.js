import { shallowMount } from '@vue/test-utils';
import GridItem from './GridItem';

describe('GridItem.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(GridItem, {
      propsData: {
        widths: {
          default: '1/2',
          sm: '1/3',
          md: '1/4',
        },
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
