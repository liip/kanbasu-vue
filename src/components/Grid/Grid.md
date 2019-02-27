```vue
const Vue = require('vue').default;
Vue.component('grid-item', require('../GridItem').default);

<grid xAlign="center" yAlign="middle" multiline>
  <grid-item :widths="{ default: '1/3' }">
    <box type="default" size="small">
      Grid Item
    </box>
  </grid-item>
  <grid-item :widths="{ default: '1/3', md: '1/4', lg: '1/5' }">
    <box type="default" size="small">
      Grid Item
    </box>
  </grid-item>
  <grid-item :widths="{ default: '1/3', lg: '1/5' }">
    <box type="default" size="small">
      Grid Item
    </box>
  </grid-item>
</grid>
```