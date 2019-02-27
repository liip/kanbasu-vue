# Kanbasu Vue

[Kanbasu](https://kanbasu.liip.ch/) components as [Vue](https://vuejs.org/) components.

## Install

```sh
npm install kanbasu-vue
```

## Usage

Import all components:

```js
import Vue from 'vue';
import KanbasuVue from 'kanbasu-vue';

Vue.use(KanbasuVue);
```

Import specific components:

```js
import { Grid, GridItem } from 'kanbasu-vue';

Vue.use(Grid);
Vue.use(GridItem);
```