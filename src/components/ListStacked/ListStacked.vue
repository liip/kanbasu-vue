<template>
  <ul :class="classNames">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ListStacked',

  props: {
    /**
     * List items gutter size:
     * `tight, tiny, small, large, huge`
     */
    size: {
      type: String,
    },
    /**
     * Add separators between items
     */
    divided: {
      type: Boolean,
    },
  },

  computed: {
    classNames() {
      return [
        'list-stacked',
        { [`list-stacked--${this.size}`]: !!this.size },
        { 'list-stacked--divided': this.divided },
      ];
    },
  },
};
</script>
