<script>
export default {
  props: [],

  data () {
    return {
      activeIndex: -1
    }
  },

  render (h) {
    let titles = []
    let bodys = []

    this.$slots.default
      .filter(x => x.tag)
      .forEach((x, idx) => {
        const opts = x.componentOptions
        if (this.activeIndex === -1 &&
          typeof opts.propsData.active !== 'undefined') {
          this.activeIndex = idx
        }
        let [title, body] = opts.children.filter(x => x.tag)

        let titleVNode = h(
          'div',
          {
            'class': {
              'vc-tab-title': true,
              'active': this.activeIndex === idx
            },
            'on': {
              click: () => this.onClickTitle(idx)
            }
          },
          title.componentOptions.children
        )
        titles.push(titleVNode)

        let bodyVNode = h(
          'div',
          {
            'class': {
              'vc-tab-body': true,
              'visible': this.activeIndex === idx
            }
          },
          body.componentOptions.children
        )
        bodys.push(bodyVNode)
      })

    let title = h('div', {'class': 'vc-tab-titles'}, titles)
    let body = h('div', {'class': 'vc-tab-bodys'}, bodys)

    return h('div', {'class': 'vc-tabs'}, [title, body])
  },

  methods: {
    onClickTitle (idx) {
      this.activeIndex = idx
    }
  }
}
</script>

<style lang="less">
.vc-tabs {
  font-size: 14px;

  .vc-tab-titles {
    margin-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
  }

  .vc-tab-title {
    display: inline-block;
    margin-bottom: -1px;
    padding: 5px 15px;
    cursor: pointer;
    &:hover {
      color: #108ee9;
    }
    &.active {
      color: #108ee9;
      border-bottom: 2px solid #108ee9;
    }
  }

  .vc-tab-body {
    display: none;
  }

  .vc-tab-body.visible {
    display: block;
  }
}
</style>
