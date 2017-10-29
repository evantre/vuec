<template>
<div>
<h1>Pagination</h1>

<div class="demo">
  <pagination
    :current="current"
    :total="total"
    @change="onChange"></pagination>

  <pagination
    :current="current1"
    :total="total1"
    @change="onChange1"></pagination>
</div>

<doc-md>
<script type="text/html">
``` html
<pagination
  :current="current"
  :total="total"
  @change="onChange"></pagination>

<pagination
  :current="current1"
  :total="total1"
  @change="onChange1"></pagination>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Pagination from 'components/Pagination/Pagination'

export default {
  components: {
    Pagination,
    DocMd
  },

  data () {
    return {
      current: 5,
      total: 322,
      current1: 1,
      total1: 71
    }
  },

  methods: {
    onChange (page) {
      this.current = page
    },
    onChange1 (page) {
      this.current1 = page
    }
  }
}
</script>

<style lang="less" scoped>
</style>
