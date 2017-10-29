<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
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
