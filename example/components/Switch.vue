<template>
<div>
<h1>Switch</h1>

<div class="demo">
  <vc-switch v-model="checked" @input="onInput" />

  <vc-switch v-model="checked1" disabled />

  <vc-switch v-model="checked2">
    <span v-if="checked2">开</span>
    <span v-else>关</span>
  </vc-switch>
</div>

<doc-md>
<script type="text/html">
``` html
<vc-switch v-model="checked" />

<vc-switch v-model="checked1" disabled />

<vc-switch v-model="checked2">
  <span v-if="checked">on</span>
  <span v-else>off</span>
</vc-switch>
```
``` js
import VcSwitch from 'components/Switch/Switch'

export default {
  components: {
    VcSwitch
  },

  data () {
    return {
      checked: false,
      checked1: false,
      checked2: true
    }
  }
}
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import VcSwitch from 'components/Switch/Switch'

export default {
  components: {
    VcSwitch,
    DocMd
  },

  data () {
    return {
      checked: false,
      checked1: false,
      checked2: true
    }
  },

  methods: {
    onInput (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less">
</style>
