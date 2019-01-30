<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid',

  props: {
    /**
     * The Grid gutters size:
     * `tight, tiny, small, large, huge`
     */
    size: {
      type: String,
    },
    /**
     * Horizontal alignment of the columns:
     * `center, right`
     */
    xAlign: {
      type: String,
    },
    /**
     * Vertical alignment of the columns:
     * `middle, bottom, even`
     */
    yAlign: {
      type: String,
    },
    /**
     * Reverse columns order
     */
    rev: {
      type: Boolean,
    },
    /**
     * Add space between rows when there's multiple lines of grid items
     */
    multiline: {
      type: Boolean,
    },
  },

  computed: {
    classNames() {
      return [
        'grid',
        { [`grid--${this.size}`]: !!this.size },
        { [`grid--${this.xAlign}`]: !!this.xAlign },
        { [`grid--${this.yAlign}`]: !!this.yAlign },
        { 'grid--rev': this.rev },
        { 'grid--multiline': this.multiline },
      ];
    },
  },
};
</script>
