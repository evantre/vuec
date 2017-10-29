<template>
<div>
<h1>BackTop</h1>

<div class="demo">
  <back-top circle class="up">up</back-top>
</div>

<doc-md>
<script type="text/html">
``` html
<back-top circle class="up">up</back-top>
```
``` css
.up {
  line-height: 35px;
}
```
</script>
</doc-md>

<div class="place"></div>

</div>
</template>

<script>
import DocMd from './DocMd'
import BackTop from 'components/BackTop/BackTop'

export default {
  components: {
    BackTop,
    DocMd
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.place {
  height: 1500px
}
.up {
  line-height: 35px;
}
</style>
