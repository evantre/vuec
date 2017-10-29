<script>
export default {
  props: {
    trigger: {
      type: String,
      // click, hover
      default: 'click'
    }
  },

  data () {
    return {
      visible: false
    }
  },

  render (h) {
    let header, menu
    this.$slots.default
      .filter(c => !!c.tag)
      .forEach(c => {
        if (c.tag.indexOf('DropdownHeader') !== -1) {
          header = this.createHeader(h, c)
        } else if (c.tag.indexOf('DropdownMenu') !== -1) {
          menu = this.createMenu(h, c)
        }
      })

    return h('div', {'class': 'vc-dropdown'}, [header, menu])
  },

  methods: {
    createHeader (h, vnode) {
      let on = {}
      if (this.trigger === 'click') {
        on.click = this.onClickTrigger
      } else if (this.trigger === 'hover') {
        on.mouseenter = this.onMouseEnter
        on.mouseleave = this.onMouseLeave
      }
      return h('div', {'class': 'vc-dropdown-header', 'on': on}, vnode.componentOptions.children)
    },

    createMenu (h, vnode) {
      let children = vnode.componentOptions.children
        .filter(x => !!x.tag)
        .map(x => h('div', {'class': 'vc-dropdown-item'}, x.componentOptions.children))
      let data = {
        'class': {
          'vc-dropdown-menu': true,
          'visible': this.visible
        }
      }
      if (this.trigger === 'hover') {
        data.on = {
          'mouseenter': this.onMouseEnter,
          'mouseleave': this.onMouseLeave
        }
      }
      return h('div', data, children)
    },

    onClickTrigger () {
      this.visible ? this.hide() : this.show()
    },

    onMouseEnter () {
      if (this.delay) {
        clearTimeout(this.delay)
        this.delay = null
      } else {
        this.show()
      }
    },

    onMouseLeave () {
      this.delay = setTimeout(() => {
        this.delay = null
        this.hide()
      }, 300)
    },

    show () {
      this.visible = true
      if (this.trigger === 'click') {
        document.addEventListener('click', this.closeOnDocumentClick, false)
      }
    },

    hide () {
      this.visible = false
      if (this.trigger === 'click') {
        document.removeEventListener('click', this.closeOnDocumentClick, false)
      }
    },

    closeOnDocumentClick (e) {
      if (!this.$el.contains(e.target)) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="less">
.vc-dropdown {
  display: inline-block;
  position: relative;

  .vc-dropdown-header {
    cursor: pointer;
  }

  .vc-dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    z-index: 1000;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);

    &.visible {
      display: block;
    }
  }

  .vc-dropdown-item {
    padding: 7px 16px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    transition: background .3s ease;

    &:first-child {
      border-radius: 4px 4px 0 0;
    }
    &:last-child {
      border-radius: 0 0 4px 4px;
    }
    &:hover {
      background-color: #ecf6fd;
    }
  }
}
</style>
