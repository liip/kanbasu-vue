import { shallowMount } from '@vue/test-utils';
import Grid from './Grid.vue';

describe('Grid.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Grid);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with x alignement', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        xAlign: 'center',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with y alignement', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        yAlign: 'middle',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders reversed', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        rev: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders as multiline', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        multiline: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
