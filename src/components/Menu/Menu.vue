<script>
export default {
  props: {
    mode: {
      type: String,
      // horizontal, vertical
      default: 'horizontal'
    },
    theme: {
      type: String,
      // light, dark
      default: 'light'
    }
  },

  data () {
    return {
      activeIndex: -1,
      visible: {}
    }
  },

  created () {
    this.$slots.default
      .filter(x => !!x.tag)
      .forEach((x, idx) => {
        if (typeof x.componentOptions.propsData.active !== 'undefined') {
          this.activeIndex = idx
        }
      })
  },

  render (h) {
    let children = this.$slots.default
      .filter(x => !!x.tag)
      .map((x, idx) => {
        let opts = x.componentOptions
        // has not sub menu
        if (x.tag.indexOf('SubMenu') === -1) {
          let props = x.componentOptions.propsData
          let data = {
            'class': {
              'vc-menu-item': true,
              'active': idx === this.activeIndex
            },
            'on': {
              click: () => this.onClick(idx, props.data)
            }
          }
          return h('li', data, opts.children)
        }

        // has sub menu
        let on = {}
        if (this.mode === 'horizontal') {
          on.mouseenter = () => this.onMouseEnter(idx)
          on.mouseleave = () => this.onMouseLeave(idx)
        } else {
          on.click = () => this.onClickItem(idx)
        }

        let title = h('div', {'class': 'vc-menu-title', 'on': on}, opts.propsData.title)

        let children = opts.children
          .filter(x => !!x.tag)
          .map(x => h('li', {'class': 'vc-menu-item'}, x.componentOptions.children))

        on = {}
        if (this.mode === 'horizontal') {
          on.mouseenter = () => this.onMouseEnter(idx)
          on.mouseleave = () => this.onMouseLeave(idx)
        }
        let classes = {
          'vc-menu': true,
          'visible': !!this.visible[idx]
        }

        let menu = h('ul', {'class': classes, 'on': on}, children)
        return h('li', {'class': 'vc-menu-sub'}, [title, menu])
      })

    let classes = {
      'vc-menu': true,
      'vc-menu-horizontal': this.mode === 'horizontal',
      'vc-menu-vertical': this.mode === 'vertical'
    }
    return h('ul', {'class': classes}, children)
  },

  methods: {
    onClick (idx, data) {
      if (idx !== this.activeIndex) {
        this.activeIndex = idx
        this.$emit('change', data, idx)
      }
    },

    onMouseEnter (idx) {
      if (this.delay) {
        clearTimeout(this.delay)
        this.delay = null
      } else {
        this.show(idx)
      }
    },

    onMouseLeave (idx) {
      this.delay = setTimeout(() => {
        this.delay = null
        this.hide(idx)
      }, 300)
    },

    show (idx) {
      this.$set(this.visible, idx, true)
    },

    hide (idx) {
      this.visible[idx] = false
    },

    onClickItem (idx) {
      this.visible[idx] ? this.hide(idx) : this.show(idx)
    }
  }
}
</script>

<style lang="less">
.vc-menu {
  font-size: 14px;
  color: rgba(0,0,0,.65);
}

.vc-menu-horizontal {
  line-height: 46px;
  border-bottom: 1px solid #d9d9d9;

  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }

  > li {
    float: left;
    position: relative;
    top: 1px;
    margin: 0;
    padding: 0 20px;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    cursor: pointer;

    &.active,
    &:hover {
      border-bottom: 2px solid #108ee9;
      color: #108ee9;
    }
  }

  .vc-menu-title {
    padding: 0 20px;
  }
}

.vc-menu-sub {
  padding: 0 !important;

  .vc-menu-item {
    line-height: 35px;
    padding: 0 10px;
    &:hover {
      color: #108ee9;
    }
  }
}

.vc-menu-horizontal .vc-menu-sub .vc-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1050;
  min-width: 100%;
  margin-top: 7px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);

  &.visible {
    display: block;
  }
}

&.vc-menu-vertical {
  width: 240px;
  height: 100%;
  border-right: 1px solid #e9e9e9;

  > .vc-menu-item {
    line-height: 42px;
    height: 42px;
    border-right: 3px solid transparent;
  }

  > li {
    padding: 0 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &.active {
      color: #108ee9;
      border-right-color: #108ee9;
      background-color: #ecf6fd;
    }
    &:hover {
      color: #108ee9;
    }
  }

  .vc-menu-title {
    padding: 0 16px;
    line-height: 42px;
    height: 42px;
  }
}

.vc-menu-vertical .vc-menu-sub {
  .vc-menu {
    display: none;
    &.visible {
      display: block;
    }
  }

  .vc-menu-item {
    padding-left: 48px;
    border-right: 3px solid transparent;

    &:hover {
      color: #108ee9;
      border-right-color: #108ee9;
      background-color: #ecf6fd;
    }
  }
}
</style>
