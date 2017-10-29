<script>
export default {
  props: {
    easing: {
      type: String
    },
    autoplay: {
      type: Boolean
    }
  },

  data () {
    return {
      containerWidth: 0,
      paneWidth: 0,
      transform: 0,
      size: 0,
      current: 0
    }
  },

  render (h) {
    let children = this.$slots.default
      .filter(x => x.tag)
      .map(x => {
        let style = {}
        if (this.paneWidth) {
          style.width = this.paneWidth + 'px'
        }
        return h('div', {'class': 'carousel-pane', style}, x.componentOptions.children)
      })

    this.size = children.length

    let style = {}
    if (this.containerWidth) {
      style.width = this.containerWidth + 'px'
    }
    style.transform = `translateX(${this.transform}px)`
    let container = h('div', {'class': 'carousel-container', style}, children)

    let operation = h(
      'div',
      {'class': 'carousel-operation'},
      [
        h('div', {'class': 'carousel-prev', on: {click: this.onPrev}}, 'prev'),
        h('div', {'class': 'carousel-next', on: {click: this.onNext}}, 'next')
      ]
    )

    return h('div', {'class': 'carousel'}, [container, operation])
  },

  mounted () {
    let width = this.$el.clientWidth
    this.paneWidth = width
    this.containerWidth = width * this.size
  },

  methods: {
    next () {
      let next = this.current + 1
      if (next <= this.size - 1) {
        this.current = next
        this.transform = -this.paneWidth * this.current
      }
    },
    prev () {
      let prev = this.current - 1
      if (prev >= 0) {
        this.current--
        this.transform = -this.paneWidth * this.current
      }
    },
    onNext () {
      this.next()
    },
    onPrev () {
      this.prev()
    }
  }
}
</script>

<style lang="less">
.carousel {
  overflow: hidden;

  .carousel-container {
    width: 100%;
    transform: translateX(0);
    transition: transform 500ms;
  }

  .carousel-pane {
    float: left;
    width: 100%;
  }

  .carousel-prev,
  .carousel-next {
    cursor: pointer;
  }
}
</style>
