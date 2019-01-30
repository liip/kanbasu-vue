import components from './components';

export const plugin = {
  install: function(Vue) {
    Object.values(components).forEach(component => {
      Vue.component(component.name, component);
    });
  },
};

export default plugin;
