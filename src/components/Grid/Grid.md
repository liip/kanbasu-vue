```vue
<grid xAlign="center" yAlign="middle" :multiline="true">
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