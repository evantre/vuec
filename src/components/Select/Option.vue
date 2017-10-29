<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    value: {
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
