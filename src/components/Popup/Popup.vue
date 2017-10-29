<script>
import Vue from 'vue'

export default {
  props: {
    trigger: {
      type: String,
      // 'hover', 'click', 'focus'
      default: 'hover'
    },
    position: {
      type: String,
      // top left, top right, top center,
      // bottom right, bottom left, bottom center,
      // left center, right center
      default: 'top center'
    },
    offset: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      visible: false,
      style: {}
    }
  },

  render (h) {
    let trigger
    this.$slots.default
      .filter(x => !!x.tag)
      .forEach(x => {
        if (x.tag.indexOf('PopupTrigger') !== -1) {
          trigger = this.createTrigger(h, x)
        } else if (x.tag.indexOf('PopupContent') !== -1) {
          this.createContent(h, x)
        }
      })

    return trigger
  },

  beforeDestroy () {
    this.popupComponent.$destroy()
    document.body.removeChild(this.popupComponent.$el)
    this.popupComponent = null
  },

  methods: {
    createTrigger (h, vdom) {
      let on = {}
      if (this.trigger === 'click') {
        on.click = this.onClickTrigger
      } else if (this.trigger === 'hover') {
        on.mouseenter = this.onMouseEnter
        on.mouseleave = this.onMouseLeave
      } else if (this.trigger === 'focus') {
        // TODO
      }

      return h(
        'div',
        {
          'on': on,
          'ref': 'popTrigger',
          'class': 'vc-popup-trigger'
        },
        vdom.componentOptions.children
      )
    },

    createContent (h, vdom) {
      if (!this.popupComponent) {
        this.popupContainer = document.createElement('div')
        document.body.appendChild(this.popupContainer)
      }

      this.popupComponent = new Vue({
        render: (h) => {
          return h(
            'div',
            {
              'style': this.style,
              'class': {'vc-popup-content': true, 'visible': this.visible}
            },
            vdom.componentOptions.children
          )
        }
      }).$mount(this.popupContainer)
    },

    computedStyle () {
      const triggerRect = this.$refs.popTrigger.getBoundingClientRect()
      const contentRect = this.popupComponent.$el.getBoundingClientRect()
      const {pageYOffset, pageXOffset} = window
      let [pos1, pos2] = this.position.split(/\s/)
      let style = {}

      if (pos1 === 'top' || pos1 === 'bottom') {
        if (pos1 === 'top') {
          style.top = pageYOffset + triggerRect.top - contentRect.height - this.offset - 10 + 'px'
        } else {
          style.top = pageYOffset + triggerRect.bottom + this.offset + 10 + 'px'
        }

        if (pos2 === 'left') {
          style.left = pageXOffset + triggerRect.left + 'px'
        } else if (pos2 === 'right') {
          style.left = pageXOffset + triggerRect.right - contentRect.width + 'px'
        } else {
          style.left = pageXOffset + triggerRect.left + triggerRect.width / 2 - contentRect.width / 2 + 'px'
        }
      } else {
        if (pos1 === 'left') {
          style.left = pageXOffset + triggerRect.left - contentRect.width - this.offset - 10 + 'px'
        } else {
          style.left = pageXOffset + triggerRect.right + this.offset + 10 + 'px'
        }

        if (pos2 === 'top') {
          style.top = pageYOffset + triggerRect.top + 'px'
        } else if (pos2 === 'bottom') {
          style.top = pageYOffset + triggerRect.bottom - contentRect.height + 'px'
        } else {
          style.top = pageYOffset + triggerRect.top + triggerRect.height / 2 - contentRect.height / 2 + 'px'
        }
      }

      this.style = style
    },

    onClickTrigger () {
      this.visible = !this.visible
      if (this.visible) {
        this.onOpen()
      }
    },

    onMouseEnter () {
      this.visible = true
      this.onOpen()
    },

    onMouseLeave () {
      this.visible = false
    },

    onOpen () {
      this.$nextTick(() => {
        this.computedStyle()
      })
    }
  }
}
</script>

<style lang="less">
.vc-popup-trigger {
  display: inline-block;
  cursor: pointer;
}

.vc-popup-content {
  display: none;
  position: absolute;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);

  &.visible {
    display: block;
  }
}
</style>
