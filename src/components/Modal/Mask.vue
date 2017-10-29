<template>
<div
  class="vc-mask"
  :class="{visible: visible}"
  @click="onClick">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.vc-mask {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: #333;
  background-color: rgba(55, 55, 55, .6);

  &.visible {
    display: block;
  }
}
</style>
