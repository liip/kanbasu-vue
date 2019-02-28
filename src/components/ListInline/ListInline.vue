<template>
  <ul :class="classNames">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ListInline',

  props: {
    /**
     * List items alignment:
     * `center, right, justified`
     */
    align: {
      type: String,
    },
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
        'list-inline',
        { [`list-inline--${this.size}`]: !!this.size },
        { [`list-inline--${this.align}`]: !!this.align },
        { 'list-inline--divided': this.divided },
      ];
    },
  },
};
</script>
