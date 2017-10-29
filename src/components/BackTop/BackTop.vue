<template>
<div
  class="vc-backtop"
  :class="{'vc-backtop-circle': circle, 'vc-backtop-visible': visible}"
  @click="onClick">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    circle: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: false
    }
  },

  mounted () {
    this.onScroll = () => {
      this.visible = document.body.scrollTop >= this.visibilityHeight
    }
    document.addEventListener('scroll', this.onScroll, false)
  },

  destroyed () {
    document.removeEventListener('scroll', this.onScroll, false)
  },

  methods: {
    onClick () {
      window.scrollTo(0, 0)
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.vc-backtop {
  display: none;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background: #57c5f7;
  cursor: pointer;

  &.vc-backtop-visible {
    display: block;
  }

  &.vc-backtop-circle {
    border-radius: 50%;
  }
}
</style>
