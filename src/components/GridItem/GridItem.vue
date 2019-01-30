<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid-item',

  props: {
    /**
     * `{ default: '1/2', md: '1/3', lg: '1/4', … }`
     */
    widths: {
      type: Object,
      required: true,
    },
  },

  computed: {
    classNames() {
      const classes = ['grid__item'];

      Object.keys(this.widths).forEach(breakpoint => {
        let ratio = this.widths[breakpoint];

        classes.push(
          `${breakpoint !== 'default' ? `${breakpoint}-` : ''}w-${ratio}`
        );
      });

      return classes;
    },
  },
};
</script>
