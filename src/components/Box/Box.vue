<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Box',

  props: {
    /**
     * The style of the box:
     * `default, primary`
     */
    variant: {
      type: String,
    },
    /**
     * The box padding:
     * `tight, tiny, small, large, huge`
     */
    size: {
      type: String,
    },
  },

  computed: {
    classNames() {
      return [
        'box',
        { [`box--${this.variant}`]: !!this.variant },
        { [`box--${this.size}`]: !!this.size },
      ];
    },
  },
};
</script>
