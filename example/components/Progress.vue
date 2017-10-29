<template>
<div>
<h1>Progress</h1>

<div class="demo">
  <vc-progress :percent="percent"></vc-progress>
  <vc-progress :percent="percent" show-text></vc-progress>
  <vc-progress :percent="percent" show-text text-inside></vc-progress>

  <div class="operation">
    <button @click="onMinus">-</button>
    <button @click="onAdd">+</button>
  </div>
</div>

<doc-md>
<script type="text/html">
``` html
<vc-progress :percent="percent"></vc-progress>
<vc-progress :percent="percent" show-text></vc-progress>
<vc-progress :percent="percent" show-text text-inside></vc-progress>

<div class="operation">
  <button @click="onMinus">-</button>
  <button @click="onAdd">+</button>
</div>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import VcProgress from 'components/Progress/Progress'

export default {
  components: {
    VcProgress,
    DocMd
  },

  data () {
    return {
      percent: 20
    }
  },

  methods: {
    onMinus () {
      let newValue = this.percent - 10
      if (newValue >= 0) {
        this.percent = newValue
      }
    },

    onAdd () {
      let newValue = this.percent + 10
      if (newValue <= 100) {
        this.percent = newValue
      }
    }
  }
}
</script>

<style lang="less" scoped>
.operation {
  margin: 15px 0;
}
</style>
