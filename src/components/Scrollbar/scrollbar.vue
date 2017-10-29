<template>
  <section ref="scrollWrapper"
    @ps-scroll-y="scrollHanle"
    @ps-scroll-x="scrollHanle"
    @ps-scroll-up="scrollHanle"
    @ps-scroll-down="scrollHanle"
    @ps-scroll-left="scrollHanle"
    @ps-scroll-right="scrollHanle"
    @ps-y-reach-start="scrollHanle"
    @ps-y-reach-end="scrollHanle"
    @ps-x-reach-start="scrollHanle"
    @ps-x-reach-end="scrollHanle">
    <slot></slot>
  </section>
</template>
<script>
import scrollBar from 'perfect-scrollbar'
export default {
  name: 'gm-scrollbar',
  props: {
    settings: {
      default: undefined
    }
  },
  methods: {
    scrollHanle (evt) {
      this.$emit(evt.type, evt)
    }
  },
  mounted () {
    let container = this.$refs.scrollWrapper
    this.width = container.offsetWidth
    this.height = container.offsetHeight
    scrollBar.initialize(container, this.settings)
  },
  beforeDestroy () {
    scrollBar.destroy(this.$refs.scrollWrapper)
  },
  updated () {
    let container = this.$refs.scrollWrapper
    let width = container.offsetWidth
    let height = container.offsetHeight
    if (width !== this.width || height !== this.width) {
      scrollBar.update(container)
    }
  }
}
</script>
<style lang="less">
@import '~perfect-scrollbar/dist/css/perfect-scrollbar.css';
</style>
