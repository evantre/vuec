<template>
<div
  class="vc-switch"
  :class="{checked: value, disabled: disabled}"
  @click="onClick">
  <div class="vc-switch-content"><slot></slot></div>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  }
}
</script>

<style lang="less">
.vc-switch {
  position: relative;
  display: inline-block;
  height: 22px;
  min-width: 44px;
  line-height: 20px;
  vertical-align: middle;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;

  &.disabled {
    cursor: not-allowed;
  }

  &:after {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    top: 1px;
    border-radius: 18px;
    background-color: #fff;
    content: "";
    transition: all 0.3s, width 0.3s;
  }

  .vc-switch-content {
    margin-left: 24px;
    margin-right: 6px;
    color: #fff;
  }

  &.checked {
    border-color: #108ee9;
    background-color: #108ee9;

    &:after {
      left: 100%;
      margin-left: -19px;
    }

    .vc-switch-content {
      margin-left: 6px;
      margin-right: 24px;
    }
  }
}
</style>
