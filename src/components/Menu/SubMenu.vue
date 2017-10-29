<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'SubMenu',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
