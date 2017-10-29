<script>
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      expanded: []
    }
  },

  created () {
    this.$slots.default
      .filter(x => !!x.tag)
      .forEach((x, idx) => {
        this.expanded[idx] = typeof x.componentOptions.propsData.expanded !== 'undefined'
      })
  },

  render (h) {
    let children = this.$slots.default
      .filter(x => !!x.tag)
      .map((x, idx) => {
        let [title, content] = x.componentOptions.children.filter(x => !!x.tag)

        let children = [
          h(
            'div',
            {
              'class': 'vc-collapse-title',
              'on': {
                click: () => this.onClickTitle(idx)
              }
            },
            title.componentOptions.children
          ),
          h(
            'div',
            {
              'class': {
                'vc-collapse-content': true,
                'visible': !!this.expanded[idx]
              }
            },
            content.componentOptions.children
          )
        ]

        return h('div', {'class': 'vc-collapse-pane'}, children)
      })

    return h('div', {'class': 'vc-collapse'}, children)
  },

  methods: {
    onClickTitle (idx) {
      let expanded = this.expanded
      let value = !expanded[idx]
      this.$set(expanded, idx, value)

      if (this.accordion && value) {
        this.expanded.forEach((_, eidx) => {
          expanded[eidx] = eidx === idx
        })
      }
    }
  }
}
</script>

<style lang="less">
.vc-collapse {
  border: 1px solid #eee;
  background-color: #f7f7f7;

  .vc-collapse-pane {
    border-bottom: 1px solid #eee;
    &:last-child {
      border: 0;
    }
  }

  .vc-collapse-title {
    padding: 10px;
    cursor: pointer;
  }

  .vc-collapse-content {
    display: none;
    padding: 10px;
    background-color: #fff;
    &.visible {
      display: block;
    }
  }
}
</style>
