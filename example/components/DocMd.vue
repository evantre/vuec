<script>
import marked from 'marked'

export default {
  render (h) {
    return h(
      'div',
      {
        'class': 'markdown-body',
        domProps: {
          innerHTML: marked(this.$slots.default[0].children[0].text)
        }
      }
    )
  }
}
</script>

<style lang="less">
.markdown-body {
  margin-bottom: 20px;
}
</style>
