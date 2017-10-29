<script>
export default {
  props: {
    divider: {
      type: String,
      default: '/'
    }
  },

  render (h) {
    let children = this.$slots.default
      .filter(x => !!x.tag)
      .map(x => {
        let divider = h('span', {'class': 'vc-breadcrumb-divider'}, this.divider)
        return h('div', {'class': 'vc-breadcrumb-item'}, [...x.componentOptions.children, divider])
      })

    return h('div', {'class': 'vc-breadcrumb'}, children)
  }
}
</script>

<style lang="less">
.vc-breadcrumb {
  .vc-breadcrumb-item {
    display: inline-block;
    color: rgba(0,0,0,.65);
  }

  .vc-breadcrumb-divider {
    padding: 0 8px;
    color: rgba(0,0,0,.3);
  }

  .vc-breadcrumb-item:last-child {
    font-weight: 700;
    .vc-breadcrumb-divider {
      display: none;
    }
  }
}
</style>
