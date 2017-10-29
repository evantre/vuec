<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    data: {
      default: null
    }
  }
}
</script>

<style>
</style>
