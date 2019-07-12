<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',

  props: {
    variant: {
      type: String,
    },
  },

  computed: {
    classNames() {
      return ['container', { [`container--${this.variant}`]: !!this.variant }];
    },
  },
};
</script>
