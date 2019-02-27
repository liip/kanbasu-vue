import Grid from './Grid.vue';

Grid.install = function(Vue) {
  Vue.component(Grid.name, Grid);
};

export default Grid;
