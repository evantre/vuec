<template>
<div>
<h1>Select</h1>

<div class="demo">
  <vc-select @change="onChange">
    <vc-option :value="1">option 1</vc-option>
    <vc-option :value="2" selected>option 2</vc-option>
    <vc-option :value="3">option 3</vc-option>
    <vc-option :value="4">option 4 option 4</vc-option>
    <vc-option :value="5">option 5</vc-option>
  </vc-select>
</div>

<doc-md>
<script type="text/html">
``` html
<vc-select @change="onChange">
  <vc-option :value="1">option 1</vc-option>
  <vc-option :value="2" selected>option 2</vc-option>
  <vc-option :value="3">option 3</vc-option>
  <vc-option :value="4">option 4 option 4</vc-option>
  <vc-option :value="5">option 5</vc-option>
</vc-select>
```
``` css
.vc-select {
  width: 160px;
}
```
``` js
methods: {
  onChange (value, label, idx) {
    console.log(value, label, idx)
  }
}
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import VcSelect from 'components/Select/Select'
import VcOption from 'components/Select/Option'

export default {
  components: {
    VcSelect,
    VcOption,
    DocMd
  },

  data () {
    return {}
  },

  methods: {
    onChange (value, label, idx) {
      console.log(value, label, idx)
    }
  }
}
</script>

<style lang="less" scoped>
.vc-select {
  width: 160px;
}
</style>
