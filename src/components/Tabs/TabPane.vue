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
    }
  }
}
</script>

<style>
</style>
