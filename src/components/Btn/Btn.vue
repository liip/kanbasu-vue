<template>
  <component
    :is="tag"
    :class="classNames"
    v-bind="attributes"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Btn',

  inheritAttrs: false,

  props: {
    /**
     * The HTML tag used for the button.
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
     * The `type` attribute for input and button tags
     */
    type: {
      type: String,
      default: 'button',
    },
    /**
     * The style of the button:
     * `default, primary, bare`
     */
    variant: {
      type: String,
    },
    /**
     * The button size:
     * `small, large`
     */
    size: {
      type: String,
    },
    /**
     * Make the button takes 100% of the parent width
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Set the disable attribute and add the `disabledClass` to the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The class applied to disabled buttons
     */
    disabledClass: {
      type: String,
      default: 'btn--disabled',
    },
  },

  computed: {
    attributes() {
      return Object.assign(
        {},
        {
          // Set disabled attribute only on button/input tags
          ...(this.disabled &&
            ['input', 'button'].indexOf(this.tag) > -1 && { disabled: true }),
          // Set type attribute only on button/input tags and defaults to `button`
          ...(this.type &&
            ['input', 'button'].indexOf(this.tag) > -1 && { type: this.type }),
        },
        this.$attrs
      );
    },

    classNames() {
      return [
        'btn',
        { 'btn--block': this.block },
        { [`btn--${this.variant}`]: !!this.variant },
        { [`btn--${this.size}`]: !!this.size },
        { [this.disabledClass]: this.disabled },
      ];
    },
  },
};
</script>
