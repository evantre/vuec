<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>
