<template>
<div>
<h1>Slider</h1>

<div class="demo">
  <div>
    <span>{{value}}</span>
    <slider v-model="value"></slider>
  </div>

  <div>
    <span>{{value1}}</span>
    <slider v-model="value1" :step="10"></slider>
  </div>

  <div>
    <span>{{value2}}</span>
    <slider
      v-model="value2"
      :min="min"
      :max="max"></slider>
  </div>
</div>

<doc-md>
<script type="text/html">
``` html
<slider v-model="value"></slider>

<slider v-model="value1" :step="10"></slider>

<slider
  v-model="value2"
  :min="min"
  :max="max"></slider>
```
```js
data () {
  return {
    value: 10,
    value1: 10,
    value2: 120,
    min: 100,
    max: 200
  }
}
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Slider from 'components/Slider/Slider'

export default {
  components: {
    Slider,
    DocMd
  },

  data () {
    return {
      value: 10,
      value1: 10,
      value2: 120,
      min: 100,
      max: 200
    }
  },

  methods: {
  }
}
</script>

<style lang="less">
</style>
