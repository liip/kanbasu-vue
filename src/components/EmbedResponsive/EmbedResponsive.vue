<template>
  <div class="embed-responsive" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EmbedResponsive',

  props: {
    ratio: {
      type: Number,
      default: 16 / 9,
    },
  },

  computed: {
    styleObject() {
      return {
        paddingTop: `${(1 / this.ratio) * 100}%`,
      };
    },
  },
};
</script>
