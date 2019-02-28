<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Media',

  props: {
    /**
     * Media gutter size:
     * `tight, tiny, small, large, huge`
     */
    size: {
      type: String,
    },
    /**
     * Media items y-axis alignment:
     * `middle, bottom`
     */
    align: {
      type: String,
    },
    /**
     * Put the media above/below the body on small screens
     */
    responsive: {
      type: Boolean,
    },
  },

  computed: {
    classNames() {
      return [
        'media',
        { [`media--${this.size}`]: !!this.size },
        { [`media--${this.align}`]: !!this.align },
        { 'media--responsive': this.responsive },
      ];
    },
  },
};
</script>
